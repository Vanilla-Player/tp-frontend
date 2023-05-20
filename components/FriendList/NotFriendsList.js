import NotFriendCard from "./NotFriendCard";
import { postAddFriend } from "../../utils/api";
import { useUser } from "../../context/userContext";

export default function NotFriendsList({ data, setStatusMenu }) {
  const { user } = useUser();

  const handleAddFriendClick = async (id) => {
    await postAddFriend(id, user._id).then((msg) => {
      alert(msg);
      setStatusMenu("Chats");
    });
  };

  return (
    <div className="container py-4 text-white ">
      <h2 className="text-left py-2 px-4 font-semibold border-b border-b-gray-600 text-gray-300 mb-2">
        Agrega nuevas personas!
      </h2>
      <ul className="max-h-[650px] min-h-[650px] grid grid-flow-row auto-rows-max gap-2 px-4 overflow-y-auto scrollbar-thin hover:scrollbar-thumb-neutral-500  scrollbar-track-neutral-800">
        {data.map((user, index) => {
          return (
            <NotFriendCard
              user={user}
              key={index}
              handleAddFriendClick={handleAddFriendClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
