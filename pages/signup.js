import { postUser } from "../utils/api";
import { useState } from "react";
import Link from "next/link";
import FormSignUp from "../components/SignUp/FormSignUp";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  const [usernameForm, setUsernameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const [passwordForm2, setPasswordForm2] = useState("");
  const [request, setRequest] = useState(false);
  const [created, setCreated] = useState(false);
  

  const handleChangeInput = (event) => {
    if (event.target.placeholder == "Contrasena") {
      setPasswordForm(event.target.value);
    }
    if (event.target.placeholder == "Usuario") {
      setUsernameForm(event.target.value);
    }
    if (event.target.placeholder == "Email") {
      setEmailForm(event.target.value);
    }
    if (event.target.placeholder == "Repita Contrasena") {
      setPasswordForm2(event.target.value);
    }
  };

  const handleSubmit = async () => {
    if (passwordForm != passwordForm2) return;

    // poner los del form del usuario en la  variable del nuevo user
    const newUserData = {
      name: usernameForm,
      email: emailForm,
      password: passwordForm,
      description: "",
    };

    const response = await postUser(newUserData);
    // Mensaje de aviso que se creo el usuario

    console.log(response);
    debugger;
    if(response.status == 201){
      setCreated(true);
      setRequest(true);
      setUsernameForm("");
      setPasswordForm("");
      setPasswordForm2("")
      setEmailForm("");
    }else{
      setRequest(true);
    }

    // if (response) router.push("/login");
  };



  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen bg-neutral-700">
      {request && created && (<div class="flex w-auto p-2 rounded-xl mb-3 justify-center items-center bg-green-200">
        <div>Usuario Creado correctamente! <Link href="/login"><span class="text-green-700 hover:text-green-400 cursor-pointe">Ir a Login</span></Link></div>
        <div class="ml-2 p-1 rounded-xl hover:bg-green-100"><button onClick={()=>{setRequest(false);setCreated(false)}}>X</button></div>
      </div>)}
      {request && !created && (<div class="flex w-auto p-2 rounded-xl mb-3 justify-center items-center bg-red-200">
        <div>Error al Crear Usuario! </div>
        <div class="ml-2 p-1 rounded-xl hover:bg-red-100"><button onClick={()=>{setRequest(false)}}>X</button></div>
      </div>)}
      <div className="flex flex-col items-center justify-center bg-neutral-800 sm:w-auto sm:h-[300px] w-full h-full sm:rounded-2xl relative ">
        <div className="absolute top-0 left-0 cursor-pointer">
          <Link href="/">
            <svg
              className="h-10 w-10 mt-2 ml-2 rounded-xl sm:h-10 sm:w-10 text-white hover:bg-neutral-500 transition duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </div>

        <FormSignUp
          handleSubmit={handleSubmit}
          handleChangeInput={handleChangeInput}
          username={usernameForm}
          password={passwordForm}
          password2={passwordForm2}
          email={emailForm}
        />
      </div>
    </div>
  );
}
