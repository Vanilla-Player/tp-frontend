import { useState, useEffect } from "react";
import Footer from "../components/FriendList/Footer";
import FriendList from "../components/FriendList/FriendList";
import Header from "../components/FriendList/Header";
import Dashboard from "../components/Dashboard/Dashboard";
import NotFriendsList from "../components/FriendList/NotFriendsList";
import ArchivedList from "../components/FriendList/ArchivedList";
import Notchatopen from "../components/Notchatopen";
import {
  getUsersNotInFriendList,
  getFriendList,
  getArchivedMessages,
  getMessageHistory,
} from "../utils/api";
import {useUser} from '../context/userContext'
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const JWT = require("jsonwebtoken");

// Traigo todos los mensajes del usuario que esta "logeado" con OTRO ENDPOINT para facilitar la request
//con los mensajes del usuario al que clickeo el chat y viceversa
// despues ordeno por fecha y los muestro de manera descendiente

export default function Chat({userSession}) {
  const [statusMenu, setStatusMenu] = useState("Chats");
  const [searchFriend, setSearchFriend] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [friend, setFriend] = useState({});
  const [dataChatUser, setDataChatUser] = useState([]);
  const [usersNotInFriendList, setUsersNotInFriendList] = useState([]);
  const [friendsInList, setFriendsInList] = useState([]);
  const [messagesHistory, setMessagesHistory] = useState([]);
  const [archivedMessages, setArchivedMessages] = useState([]);
  const [dimensions, setDimensions] = useState({
    heigth: null,
    width: null,
  });
  const exitChat = () => setIsOpen(false);
  const {user, setUser} =  useUser()
  const router = useRouter();


  const handleChatIsOpen = (idFriend) => {
    setIsOpen(true);
    const total = [...friendsInList, ...usersNotInFriendList];
    if (idFriend !== friend._id && friend !== {}) {
      const f = total.find((user) => user._id === idFriend);
      setFriend(f);
    }
  };

  const handleSignOut = (e) =>{
    Cookies.remove("User");
    router.push('/')
  }

  const handleChangeSearchBar = (event) => {
    setSearchFriend(event.target.value);
  };

  const handleClickHeader = (event) => {
    setStatusMenu(event.target.getAttribute("name"));
  };

  // Efecto que ocurre cuando se clickea una Card Amigo o Desconocido y triggerea el cambio en el dashboard
  // Tambien cuando se detecta un nuevo mensaje en la base
  useEffect(() => {
    const filterMsg = () => {
      const newData = messagesHistory.filter((msg) => {
        if (msg.sender === friend._id || msg.receiver === friend._id) {
          return msg;
        }
      });
      setDataChatUser(newData);
    };
    filterMsg();
  }, [friend, messagesHistory]);


  // Efecto que se activa cuando el menu cambia de un estado a otro
  useEffect(() => {
    getUsersNotInFriendList(userSession._id).then((value) => setUsersNotInFriendList(value)); // Utilizamos el ususario de la session
    getFriendList(userSession._id).then((value) => setFriendsInList(value));
    getArchivedMessages(userSession._id).then((value) => setArchivedMessages(value));
  }, [statusMenu, archivedMessages]);

  // Efecto que se activa una vez para traer todos los mensajes del usuario logeado
  useEffect(() => {

    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    getMessageHistory(userSession._id).then((value) => setMessagesHistory(value));
    const intervalID = setInterval(() => {
      getMessageHistory(userSession._id).then((value) => setMessagesHistory(value));
    }, 1000);

    return () => {
      clearInterval(intervalID);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex flex-row overflow-hidden">
      <div
        className={`h-full xl:w-1/3 sm:w-1/2 sm:block ${
          !isOpen && dimensions.width <= 425 ? "w-full" : "hidden"
        } bg-neutral-800 `}
      >
        <Header
          search={handleChangeSearchBar}
          searchFriend={searchFriend}
          handleClickHeader={handleClickHeader}
          status={statusMenu}
        />
        {statusMenu === "Chats" && (
          <FriendList
            handleChat={handleChatIsOpen}
            setStatusMenu={setStatusMenu}
            friendList={friendsInList}
            usersNotInFriendList={usersNotInFriendList}
            dataChatHistory={messagesHistory}
            searchFriend={searchFriend}
          />
        )}
        {statusMenu === "Find" && (
          <NotFriendsList data={usersNotInFriendList} setStatusMenu={setStatusMenu} />
        )}
        {statusMenu === "Archived" && (
          <ArchivedList
            data={archivedMessages}
            friendList={friendsInList}
            usersNotInFriendList={usersNotInFriendList}
          />
        )}
        <Footer handleSignOut={handleSignOut} />
      </div>
      <div
        className={`h-full sm:w-1/2 xl:w-2/3 sm:block ${
          isOpen && dimensions.width <= 425 ? "block w-full" : "hidden"
        } relative`}
        
      >
      <Notchatopen/>
        {isOpen ? (
          <Dashboard
            messages={dataChatUser}
            archivedMessages={archivedMessages}
            exitChat={exitChat}
            friend={friend}
          />
        ) : (
          // Hacer componente
          <></>
        )}
          
      </div>
      
    </div>
  );
}



export const getServerSideProps = async (context) => {
  if(!context.req.cookies["User"]){
    return {
      redirect: {
        destination: '/chat',
        permanent: false
      }
    }
  }

  const userSession = JWT.decode(context.req.cookies["User"]).user


  
  return { props: {userSession}}
}
