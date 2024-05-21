import FriendCard from "./FriendCard";
import { useUser } from "../../context/userContext";
import { postAddFriend } from "../../utils/api.js";

export default function FriendList({
  friendList,
  handleChat,
  dataChatHistory,
  setStatusMenu,
  searchFriend,
  usersNotInFriendList,
}) {
  const { user } = useUser();
  
  const allUsers = [...friendList, ...usersNotInFriendList];
  
  const filteredData = friendList.filter((fr) => {
    if (searchFriend === "") {
      return fr;
    } else {
      return fr.name.includes(searchFriend);
    }
  });

  const chats = allUsers.map((f) => {
    const chatsByUser = dataChatHistory.filter((c) => {
      if (c.sender === f._id || c.receiver === f._id) {
        return c;
      }
    });
    return chatsByUser;
  });

  const lastMessages = chats.map((c) => {
    let size = Object.keys(c).length;
    return c[size - 1];
  });

  const usersNotInList = usersNotInFriendList.filter((us) => {
    return dataChatHistory.find((msg) => msg.sender === us._id);
  });

  const handleAddFriendClick = async (id) => {
    await postAddFriend(id, user._id).then((msg) => {
      alert(msg);
    });
  };

  return (
    <div className="container py-4 text-white ">
      <h2 className="text-left py-2 px-4 font-semibold border-b border-b-gray-600 text-gray-300 mb-2">
        Chats
      </h2>
      <ul className="max-h-[650px] min-h-[650px] grid grid-flow-row auto-rows-max gap-2 px-4 overflow-y-auto scrollbar-thin hover:scrollbar-thumb-neutral-500  scrollbar-track-neutral-800">
        {filteredData.map((friend, index) => {
          return (
            <FriendCard
              handleChat={handleChat}
              data={friend}
              isFriend={true}
              lastMessage={
                lastMessages[index] ? lastMessages[index] : { date: new Date() }
              }
              key={index}
            />
          );
        })}
        {usersNotInList.map((user, index) => {
          return (
            <FriendCard
              handleChat={handleChat}
              handleAddFriendClick={handleAddFriendClick}
              data={user}
              isFriend={false}
              lastMessage={{ date: new Date() }}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}
