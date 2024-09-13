import {NextRequest, NextResponse} from "next/server";
import axios from "axios";


export default async function middleware(req:NextRequest) {


}

const unProtectedRoutes = ["/login","/signup","/signup/success","/_next"]


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}