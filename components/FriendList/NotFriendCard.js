import Image from "next/image";
import { defaultSrc } from "../../utils/constants";

export default function NotFriendCard({ user, handleAddFriendClick }) {
  return (
    <li className="h-24 w-full px-2 rounded-l bg-transparent hover:bg-neutral-700 focus:outline-none cursor-pointer transition duration-150 ease-in-out">
      <a className="h-full flex items-center text-sm text-white">
        <div className="w-full h-full pb-2 px-4 flex items-center justify-between">
          <Image
            src={
              ( user.profileImage === "" || !user.profileImage )
                ? defaultSrc
                : user.profileImage
            }
            alt="Profile img"
            height={64}
            width={64}
            className="rounded-full"
          />
          <span className="block ml-2 font-semibold">{user.name}</span>
          <button
            type="button"
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            onClick={() => handleAddFriendClick(user._id)}
          >
            Add friend
          </button>
        </div>
      </a>
    </li>
  );
}
