import {
  urlUserCreate,
  urlMessages,
  urlFriendListFilter,
  urlFriendList,
  urlArchivedMessages,
  urlMessagesToSend,
} from "./constants.js";


export async function getUsersNotInFriendList(idUser) {
  const endpoint = urlFriendListFilter + idUser;
  const resUsersNotInFriendList = await fetch(endpoint);
  const usersNotInFriendList = await resUsersNotInFriendList.json();

  return usersNotInFriendList;
}

export async function getFriendList(idUser) {
  const endpoint = urlFriendList + idUser;
  const resFriendsInList = await fetch(endpoint);
  const friendsInList = await resFriendsInList.json();
  return friendsInList;
}

export async function getArchivedMessages(idUser) {
  const endpoint = urlArchivedMessages + idUser;
  const resArchivedMessages = await fetch(endpoint);
  const archivedMessages = await resArchivedMessages.json();

  return archivedMessages;
}

export async function postArchivedMessages(idUser, messageId) {
  const endpoint = urlArchivedMessages + idUser;
  const body = JSON.stringify({ idMsg: messageId});

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };
  await fetch(endpoint, options);
}

export async function deleteArchivedMessages(idUser, messageId) {
  const endpoint = urlArchivedMessages + idUser;
  const body = JSON.stringify({ idMsg: messageId});

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  };
  await fetch(endpoint, options);
}



export async function getMessageHistory(idUser) {
  const endpoint = urlMessages + idUser;
  const resMessages = await fetch(endpoint);
  const messagesHistorial = await resMessages.json();
  return messagesHistorial;
}

export async function postAddFriend(friendID, userID) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${urlFriendList}/${userID}/${friendID}`, requestOptions);

  return `Friend added: ${userID}`;
}

export async function postMessage(message, idReceiver, idUser) {
  const data = {
    description: message,
    sender: idUser,
    receiver: idReceiver,
  };

  const JSONdata = JSON.stringify(data);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  const response = await fetch(urlMessagesToSend, options);

  return response;
}

export function filterMessages(messages) {
  const msgs = messages.filter((msg) => {
    return {
      description: msg.description,
      sender: msg.sender,
      receiver: msg.receiver,
      date: `${msg.date.split(".")[0]}`,
    };
  });
  return msgs;
}


export async function postUser(userData){

  const bodyData = await new FormData();


  for(const key in userData){
     await bodyData.append(key, userData[key])
  }


  //const JSONdata = JSON.stringify({name,password,email,file, description:''})
  //console.log(JSONdata)


 

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      //"Content-Type": "application/json", // Hacer andar en back
    },
    body: bodyData,

  };

  const response = await fetch(urlUserCreate, options)


  return response

}