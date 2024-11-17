import {NextRequest, NextResponse} from "next/server";
import axios from "axios";
import {cookies} from "next/headers";


export default async function middleware(req:NextRequest) {

    if(unProtectedRoutes.includes(req.nextUrl.pathname)){
        return NextResponse.next()
    }

    try {
        const response = await axios.get("http://localhost:8080/validate",{headers:{Authorization:"Bearer " +cookies().get("token")?.value}});
        if(response.data){
            return NextResponse.next()
        }
    } catch (error) {
        return NextResponse.redirect("http://localhost:3000/login")
    }

    return NextResponse.next()
}

const unProtectedRoutes = ["/login","/signup","/signup/success","/_next"]


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}