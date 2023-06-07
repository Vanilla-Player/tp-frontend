import { NextResponse } from "next/server";
import { useUser } from "./context/userContext";
import Cookies from "js-cookie";


export async function middleware(request) {




  // if(userCookie)return NextResponse.redirect(new URL("/login", request.url))
  // const {setUser} = useUser();

  // setUser(userCookie)

  // Faltaria validar si la Cookie es correcta
  // Pero se necesita otra libreria, debido a que jwt no corre en edge
  return NextResponse.next();
}

export const config = {
  matcher: ["/chat"],
};
