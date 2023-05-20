import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { urlUsers } from "../../../utils/constants";

export default async function loginHandler(req, res){
    
    const { username, password } = req.body;
    const responseAPI = await fetch(urlUsers);
    const data =  await responseAPI.json();
    const users = data.users;
    const loggedUser = await users.filter((user) =>{
        return (user.name === username && user.password === password)
    });

    if(loggedUser == []) {setError(true);
        return res.status(401).json('no valid')}; // Hardcode, por si se erra en el login
      // // Creo la cookie, en caso de que no haya usuario, devuelvo un forbiden y algun
      
      const token = await sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        userID:loggedUser._id,

      }, 
      "secret");

      const serialized = await serialize ("userToken", token,{
        httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
      });
  
      await res.setHeader("Set-Cookie", serialized);
      return res.status(200).json('login succefully')


}