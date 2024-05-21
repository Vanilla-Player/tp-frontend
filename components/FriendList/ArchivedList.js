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
    <div className="p-4 container text-white">
      <h2 className="text-left py-2 px-4 font-semibold border-b border-b-gray-600 text-gray-300 mb-2">
        Mensajes archivados
      </h2>
      <ul className="max-h-[650px] min-h-[650px] grid grid-flow-row auto-rows-max gap-2 px-4 overflow-y-auto scrollbar-thin hover:scrollbar-thumb-neutral-500  scrollbar-track-neutral-800">
        {data.map((msg, i) => {
          return (
            <li
              key={i}
              className="h-16 w-full px-2 flex items-center rounded-l bg-transparent hover:bg-neutral-700 focus:outline-none cursor-pointer transition duration-150 ease-in-out"
            >
              <a className="h-1/2 flex items-center text-sm md:text-xl">
                <span>{msg.description}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
