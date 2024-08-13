import {
  urlUserCreate,
  urlMessages,
  urlFriendListFilter,
  urlFriendList,
  urlArchivedMessages,
  urlMessagesToSend,
} from "./constants.js";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getUsersNotInFriendList(idUser) {
  const endpoint = apiUrl + urlFriendListFilter + idUser;
  const resUsersNotInFriendList = await fetch(endpoint);
  const usersNotInFriendList = await resUsersNotInFriendList.json();

  return usersNotInFriendList;
}

export async function getFriendList(idUser) {
  const endpoint = apiUrl + urlFriendList + idUser;
  const resFriendsInList = await fetch(endpoint);
  const friendsInList = await resFriendsInList.json();
  return friendsInList;
}

export async function getArchivedMessages(idUser) {
  const endpoint = apiUrl + urlArchivedMessages + idUser;
  const resArchivedMessages = await fetch(endpoint);
  const archivedMessages = await resArchivedMessages.json();

  return archivedMessages;
}

export async function postArchivedMessages(idUser, messageId) {
  const endpoint = apiUrl + urlArchivedMessages + idUser;
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
  const endpoint = apiUrl + urlArchivedMessages + idUser;
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
  const endpoint = apiUrl + urlMessages + idUser;
  const resMessages = await fetch(endpoint);
  const messagesHistorial = await resMessages.json();
  return messagesHistorial;
}

export async function postAddFriend(friendID, userID) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`${apiUrl}${urlFriendList}/${userID}/${friendID}`, requestOptions);

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

  const response = await fetch(apiUrl + urlMessagesToSend, options);

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

  // const bodyData = await new FormData();

  const { name, email, password, description } = userData;
  // for(const key in userData){
  //    await bodyData.append(key, userData[key])
  // }
  const JSONdata = JSON.stringify({name,password,email, description})
  //console.log(JSONdata)

  const options = {
    method: "POST",
    headers: {
      //"Content-Type": "multipart/form-data",
      "Content-Type": "application/json", 
    },
    body: JSONdata,
  };

  const response = await fetch(apiUrl + urlUserCreate, options)

  return response

}