import jwt from "jsonwebtoken";
export const sendCookie=(user,res,message,statusCode=200)=>{
    const token=jwt.sign({
        _id:user._id,
    },process.env.JWT_SECRET)


    return res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
        sameSite:process.env.NODE_ENV==="Development" ? "lax" : "none",
        secure:process.env.NODE_ENV==="Development" ? false : true,
    }).json({
        success:true,
        message:message,
    })
}

//sameSite:"none" The cookie will be sent with all cross-site requests,// by default secure become false// otherwise cookie will be blocked
//samesite:"lax" The Cookies are sent on same-site requests and  Cookies are sent on GET requests from another site but not post
//Secure=true: Cookie is only sent over HTTPS connections.
//Secure=false: Cookie can be sent over both HTTP and HTTPS.