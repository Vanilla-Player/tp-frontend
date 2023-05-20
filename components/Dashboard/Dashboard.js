import ContainerMessages from "./ContainerMessages";
import HeaderProfile from "./HeaderProfile";
import FormMessage from "./FormMessage";
import { useEffect, useState } from "react";
import { filterMessages, postMessage } from "../../utils/api";
import {useUser} from '../../context/userContext';


export default function Dashboard({
  messages,
  exitChat,
  friend,
  archivedMessages,
}) {
  const [messageToSend, setMessageToSend] = useState("");

  // Context
  const {user} =  useUser()

  const handleChangeInput = (event) => {
    setMessageToSend(event.target.value);
  };

  const handleSubmit = (event) => {
    postMessage(messageToSend, friend._id, user._id).then(setMessageToSend(""));
    event.preventDefault();
  };

  const messagesToShow = filterMessages(messages);

  return (
    <div className="h-full w-full relative flex flex-col justify-between bg-inherit">
      <HeaderProfile friend={friend} />
      <ContainerMessages
        messages={messagesToShow}
        archivedMessages={archivedMessages}
      />
      <FormMessage
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        message={messageToSend}
      />
      <a
        className="h-8 w-8 rounded-full hover:bg-neutral-700 text-white cursor-pointer absolute top-3 right-6"
        onClick={() => exitChat()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </a>
    </div>
  );
}
