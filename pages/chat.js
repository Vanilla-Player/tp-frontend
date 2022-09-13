import { useState, useEffect } from "react";

// Dynamics imports
import Footer from "../components/FriendList/Footer";
import FriendList from "../components/FriendList/FriendList";
import Header from "../components/FriendList/Header";
import Dashboard from "../components/Dashboard/Dashboard";
import NotFriendsList from "../components/FriendList/NotFriendsList";
import ArchivedList from "../components/FriendList/ArchivedList";
import {
  getUsersNotInFriendList,
  getFriendList,
  getArchivedMessages,
  getMessageHistory,
} from "../utils/api";

// Traigo todos los mensajes del usuario que esta "logeado" con OTRO ENDPOINT para facilitar la request
//con los mensajes del usuario al que clickeo el chat y viceversa
// despues ordeno por fecha y los muestro de manera descendiente
// Testing user id: 62eaa14c3901f21e944abfcd

export default function Chat(params) {
  const [statusMenu, setStatusMenu] = useState("Chats");
  const [searchFriend, setSearchFriend] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [friend, setFriend] = useState({});
  const [dataChatUser, setDataChatUser] = useState([]);
  const [usersNotInFriendList, setUsersNotInFriendList] = useState([]);
  const [friendsInList, setFriendsInList] = useState([]);
  const [messagesHistory, setMessagesHistory] = useState([]);
  const [archivedMessages, setArchivedMessages] = useState([]);

  const exitChat = () => setIsOpen(false);

  const handleChatIsOpen = (idFriend) => {
    setIsOpen(true);
    const total = [...friendsInList, ...usersNotInFriendList];
    if (idFriend !== friend._id && friend !== {}) {
      const f = total.find((user) => user._id === idFriend);
      setFriend(f);
    }
  };

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
    getUsersNotInFriendList().then((value) => setUsersNotInFriendList(value));
    getFriendList().then((value) => setFriendsInList(value));
    getArchivedMessages().then((value) => setArchivedMessages(value));
  }, [statusMenu]);

  // Efecto que se activa una vez para traer todos los mensajes del usuario logeado
  useEffect(() => {
    getMessageHistory().then((value) => setMessagesHistory(value));

    const intervalID = setInterval(() => {
      getMessageHistory().then((value) => setMessagesHistory(value));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-row overflow-y-hidden">
      <div className="h-full w-1/4 bg-slate-200 py-4">
        <Header
          search={handleChangeSearchBar}
          searchFriend={searchFriend}
          handleClickHeader={handleClickHeader}
          status={statusMenu}
        />
        {statusMenu === "Chats" && (
          <FriendList
            handleChat={handleChatIsOpen}
            friendList={friendsInList}
            usersNotInFriendList={usersNotInFriendList}
            dataChatHistory={messagesHistory}
            searchFriend={searchFriend}
          />
        )}
        {statusMenu === "Find" && (
          <NotFriendsList data={usersNotInFriendList} />
        )}
        {statusMenu === "Archived" && (
          <ArchivedList
            data={archivedMessages}
            friendList={friendsInList}
            usersNotInFriendList={usersNotInFriendList}
          />
        )}
        <hr />
        <Footer />
      </div>
      <div className="h-full w-3/4">
        {isOpen ? (
          <Dashboard
            messages={dataChatUser}
            exitChat={exitChat}
            friend={friend}
            archivedMessages={archivedMessages}
          />
        ) : (
          // Hacer componente
          <p>Pagina sin chats</p>
        )}
      </div>
    </div>
  );
}
