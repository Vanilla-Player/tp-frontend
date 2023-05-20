import Image from "next/image";

// Ver como hacer para vincular los mensajes con los usuarios que lo mandaron
// Desde el back podria ver como popular los archived por sender o receiver != a la id
// Desde el front alguna manera de mergear los arrays

export default function ArchivedList({
  data,
  friendList,
  usersNotInFriendList,
}) {
  const allUsers = [...friendList, ...usersNotInFriendList];

  const userData = allUsers.find((user) => {});

  return (
    <div className="p-4 container">
      <h2 className=" text-left py-2 px-4 font-semibold border-b border-b-gray-600 text-gray-300 mb-2">
        Mensajes archivados
      </h2>
      <ul className="h-max-[650px] h-min-[650px] grid grid-flow-row auto-rows-max gap-4 text-white px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-200 py-2">
        {data.map((msg, i) => {
          return (
            <li
              key={i}
              className="h-24 w-full px-2 rounded-l bg-transparent hover:bg-neutral-700 focus:outline-none cursor-pointer transition duration-150 ease-in-out"
            >
              <a className="h-full flex items-center text-sm md:text-xl">
                <span>{msg.description}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
