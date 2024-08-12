

export default function FormSignUp(props){

return(

    <div className="flex flex-col grow">
        <div className="flex flex-row sm:w-auto w-screen px-6 sm:px-0 mt-20">
                
                <div className="ml-4 bg-neutral-900 mb-6">

                    <svg className="p-1 w-[35px] h-[35px] text-neutral-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokelinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>


                </div>
                <input
                type="text"
                placeholder="Usuario"
                value={props.username}
                onChange={(e) => props.handleChangeInput(e)}
                className=" p-1 bg-neutral-700 mb-6 rounded-lg outline-none text-neutral-300 focus:border-neutral-300 focus:border-2 placeholder:text-neutral-400 grow sm:grow-0"
                >
                </input>

                {/* <input
                type="file"
                placeholder="Image"
                onChange={(e) => props.handleChangeInput(e)}
                className="bg-neutral-700 mb-6 ml-4 mr-4 outline-none text-neutral-300 placeholder:text-neutral-400 px-1 grow">

                </input> */}

        </div> 
            <div className="flex flex-row px-6 sm:px-0">
                <div className="ml-4 bg-neutral-900 mb-6 align-middle">
                    <svg className="p-1  w-[35px] h-[35px] text-neutral-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokelinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>

                <input
                type="password"
                placeholder="Contrasena"
                value={props.password}
                onChange={(e) => props.handleChangeInput(e)}
                className="p-1 bg-neutral-700 mb-6 rounded-lg outline-none text-neutral-300 focus:border-neutral-300 focus:border-2 placeholder:text-neutral-400 grow sm:grow-0"
                >
                </input>

                <input
                type="password"
                placeholder="Repita Contrasena"
                value={props.password2}
                onChange={(e) => props.handleChangeInput(e)}
                className=" p-1 ml-4 mr-4 bg-neutral-700 mb-6 rounded-lg outline-none text-neutral-300 focus:border-neutral-300 focus:border-2 placeholder:text-neutral-400 grow sm:grow-0"
                >
                </input>

            </div>


            <div className="flex flex-row sm:w-auto w-screen px-6 sm:px-0">
                
                
                <div className="ml-4 bg-neutral-900 mb-6">

        

                    <svg className="p-1 w-[35px] h-[35px] text-neutral-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor">
                        <path strokelinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>


                </div>
                <input
                type="text"
                placeholder="Email"
                value={props.email}
                onChange={(e) => props.handleChangeInput(e)}
                className=" p-1 bg-neutral-700 mb-6 rounded-lg outline-none text-neutral-300 focus:border-neutral-300 focus:border-2 placeholder:text-neutral-400 grow sm:grow-0"
                >
                </input>

        </div> 


            <button className="text-white transition duration-300 bg-neutral-900 h-8 rounded-lg font-semibold hover:bg-neutral-500 mx-0 sm:mx-16" type="submit"  onClick={() => props.handleSubmit()}>
                Sign Up
            </button>



    </div>
)

}

