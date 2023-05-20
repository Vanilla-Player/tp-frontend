export default function FormLogin({
  handleChangeInput,
  handleSubmit,
  username,
  password,
}) {
  return (
    <div className="flex flex-col grow sm:mt-32 mt-52">
      <div className="flex flex-row sm:w-auto w-screen px-6 sm:px-0">
        <div className=" bg-neutral-900 mb-6">
          <svg
            className="p-1 w-[35px] h-[35px] text-neutral-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => handleChangeInput(e)}
          className="bg-neutral-700 mb-6 outline-none px-1 text-neutral-300 placeholder:text-neutral-300 grow sm:grow-0"
        ></input>
      </div>

      <div className="flex flex-row px-6 sm:px-0">
        <div className="bg-neutral-900 mb-6 align-middle">
          <svg
            className="p-1 w-[35px] h-[35px] text-neutral-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>

        <input
          type="password"
          placeholder="Contrasena"
          value={password}
          onChange={(e) => handleChangeInput(e)}
          className="bg-neutral-700 mb-6 outline-none text-neutral-300 placeholder:text-neutral-300 px-1 grow"
        ></input>
      </div>
      <button
        className="text-white transition duration-300 bg-neutral-900 h-8 rounded-lg font-semibold hover:bg-neutral-500 mx-6 sm:mx-0"
        type="submit"
        onClick={() => handleSubmit()}
      >
        Log in
      </button>
    </div>
  );
}
