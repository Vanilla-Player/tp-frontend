export default function Message({
  data,
  idUserLogged,
  saveMessage,
  removeMessage,
  isArchived,
}) {

  return (
    <li className={`flex items-end ${idUserLogged ? "justify-end" : null}`}>
      <div
        className={`flex flex-col max-w-md space-y-1 text-sm mx-1 md:space-y-2 md:text-base md:mx-4  ${
          idUserLogged ? "order-2 items-start" : "order-1 items-end"
        }  shadow `}
      >
        <span
          className={`px-4 py-2 rounded-lg inline-block relative bg-gray-300  ${
            idUserLogged
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-300 text-gray-600 rounded-bl-none"
          }`}
        >
          {data.description}
          <button onClick={() => isArchived ? removeMessage(data._id) : saveMessage(data._id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={`${isArchived ? "white" : "none"}`}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline-block ml-2 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </span>
      </div>
    </li>
  );
}
