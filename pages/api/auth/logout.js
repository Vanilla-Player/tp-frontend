import { sign, verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handleLogOut(req, res){

    const {userToken} = req.cookie;

    if(!userToken){
        return res.status(401).json({msg: 'NO TOKEN'});
    }

    try{
        verify(userToken, 'secret');
        const serialized = await serialize ("userToken", null,{
            httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: -1,
          path: "/",
          });
          res.setHeader('Set-Cookie', serialized);
        await res.setHeader("Set-Cookie", serialized);
        return res.status(200).json('logout succefully')
    }
    catch{
        return res.status(401).json({msg: 'INVALID TOKEN'});
    }

}