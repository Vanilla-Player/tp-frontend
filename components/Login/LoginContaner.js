import FormLogin from "./FormLogin";
import { useState } from "react";
import { useUser } from "../../context/userContext";
import { useRouter } from "next/router";
import { urlUsers } from "../../utils/constants";

export default function LoginContaner(props) {
  const router = useRouter();

  const [usernameForm, setUsernameForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const [error, setError] = useState(false);

  const { user, setUser } = useUser();

  const handleChangeInput = (event) => {
    if (event.target.type == "password") {
      setPasswordForm(event.target.value);
    } else {
      setUsernameForm(event.target.value);
    }
  };

  const handleSubmit = async () => {
    // const data = {
    //   username: usernameForm,
    //   password: passwordForm,

    // };

    // const JSONdata = JSON.stringify(data);

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSONdata,
    // };

    // const response = await fetch('/api/auth/login', options);

    // return response.json()
    const response = await fetch(urlUsers);
    const data = await response.json();
    const users = data.users;

    const loggedUser = await users.find((user) => {
      return user.name === usernameForm && user.password === passwordForm;
    });

    if (!loggedUser) {
      setError(true);
      return;
    }
    // Hardcode, por si se erra en el login
    // Creo la cookie, en caso de que no haya usuario, devuelvo un forbiden y algun
    setUser(loggedUser);
    router.push("/");
  };

  return (
    <div className="bg-gray-300 p-5 h-[200px] w-[350px] rounded-lg shadow-xl ">
      <FormLogin
        handleSubmit={handleSubmit}
        handleChangeInput={handleChangeInput}
        username={usernameForm}
        password={passwordForm}
      />
    </div>
  );
}
