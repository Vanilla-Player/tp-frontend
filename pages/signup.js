import { postUser } from "../utils/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import FormSignUp from "../components/SignUp/FormSignUp";
import { useRouter } from 'next/router'

export default function SignUp(){

    const router = useRouter();

    // Declarar todos los inputs
    const [usernameForm, setUsernameForm] = useState("");
    const [emailForm, setEmailForm] = useState("");
    const [passwordForm, setPasswordForm] = useState("");
    const [passwordForm2, setPasswordForm2] = useState("");
    const [imageForm, setImage] = useState(null)

    // Manejar cambios en los inputs
    const handleChangeInput = async (event) => {
        if(event.target.placeholder == "Contrasena") {setPasswordForm(event.target.value);}
        if(event.target.placeholder == "Usuario"){setUsernameForm(event.target.value);}
        if(event.target.placeholder == "Email"){setEmailForm(event.target.value)}
        if(event.target.placeholder == "Repita Contrasena"){setPasswordForm2(event.target.value)}
        if(event.target.placeholder == "Image"){setImage(event.target.files[0])}
        
    };


    const handleSubmit = async () =>{

        if(passwordForm != passwordForm2) return;

       // const imageURL = await 'http://localhost:9000/uploads/' + imageForm.replace('C:\\fakepath\\','');


        // poner los del form del usuario en la  variable del nuevo user
        const newUserData = {
            name: usernameForm,
            email: emailForm,
            password: passwordForm,
            description:"",
            file: imageForm
        }

        

    const response = await postUser(newUserData)

    if(response) router.push('/login')

    };


    return(
        <div className="relative flex justify-center items-center h-screen w-screen bg-neutral-700">
            <div className="flex flex-col items-center justify-center bg-neutral-800 sm:w-auto sm:h-[300px] w-full h-full sm:rounded-2xl relative shadow-white shadow-lg ">
            <div className="absolute top-0 left-0 cursor-pointer">
            <Link href='/'>
              <svg className="h-10 w-10 sm:h-10 sm:w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path stroke-linecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
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
                image={imageForm}
            />
            </div>
        </div>
    )

}