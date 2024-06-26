import Link from "next/link";

export default function Footer({ handleSignOut }) {
  return (
    <Link href="/" className="w-full h-32 border-t border-t-gray-600">
      <a
        href="#_"
        onClick={(e) => handleSignOut(e)}
        className="mx-auto mt-2 flex justify-center items-center w-1/2 px-6 py-2 text-base font-semibold text-center text-white rounded-lg bg-black  hover:bg-[#6d686822]" 
      >
        Cerrar sesion
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 ml-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </a>
    </Link>
  );
}
