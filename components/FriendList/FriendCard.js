import Image from "next/image";
import { useState } from "react";
import { defaultSrc } from "../../utils/constants";

export default function FriendCard({
  data,
  handleChat,
  handleAddFriendClick,
  lastMessage,
  isFriend,
}) {
  const [imageError, setImageError] = useState(false);

  const date = new Date(lastMessage.date);
  const dateNow = new Date();
  const daysDiff = Math.floor((dateNow - date) / (1000 * 60 * 60 * 24));
  const hoursDiff = Math.floor((dateNow - date) / (1000 * 60 * 60));
  const minDiff = Math.floor((dateNow - date) / (1000 * 60));

  return (
    <li className="h-24 w-full px-2 rounded-lg bg-transparent hover:bg-neutral-700 focus:outline-none cursor-pointer transition duration-150 ease-in-out">
      <a
        className="h-full flex items-center text-sm text-white border-gray-300"
        onClick={() => handleChat(data._id)}
      >
        <Image
          src={imageError ? defaultSrc : data.profileImage}
          alt="Profile img"
          height={64}
          width={64}
          className="rounded-full"
          onErrorCapture={(e) => setImageError(true)}
        />
        <div className="w-full pb-2">
          <div className="flex justify-between items-center">
            <span className="block ml-6 font-semibold ">
              {isFriend ? data.name : `Unknown user: ${data.name}`}
            </span>
            {isFriend ? (
              <span className="block ml-2 text-sm ">
                {minDiff <= 60
                  ? `${minDiff} min`
                  : hoursDiff <= 24
                  ? `${hoursDiff} hs`
                  : `${daysDiff} day`}
              </span>
            ) : (
              <div className="">
                <button
                  type="button"
                  className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  onClick={() => handleAddFriendClick(data._id)}
                >
                  Add friend
                </button>
              </div>
            )}
          </div>
          <p className="w-52 ml-6 text-sm truncate text-ellipsis ">
            {lastMessage.description}
          </p>
        </div>
      </a>
    </li>
  );
}
