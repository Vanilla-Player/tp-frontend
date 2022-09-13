import Message from "./Message";
import { idUserLogged } from "../../utils/api";

export default function ContainerMessages({ messages, archivedMessages }) {
  return (
    <div className="h-5/6 w-full px-6 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-200">
      <ul className="flex flex-col space-y-4 scrolling-touch">
        {messages.map((m, i) => {
          if (m !== undefined) {
            return (
              <Message data={m} idUserLogged={m.sender === idUserLogged} />
            );
          }
        })}
      </ul>
    </div>
  );
}

{
  /* <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
   
   <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div class="chat-message">
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1">
         </div>
      </div>
   </div> */
}
