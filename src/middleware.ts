import {NextRequest, NextResponse} from "next/server";


export default function middleware(req:NextRequest) {

    if (unProtectedRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.next();
    }

    const protectedRoutes = ["/home/**"];



    const token = req.cookies.get('token')?.value;

    console.log(!token)

    if (!token ) {
        return NextResponse.redirect(new URL('/login', req.nextUrl).toString());
    }

    return NextResponse.next();
}

const unProtectedRoutes = ["/login","/signup","/signup/success","/_next"]


export const config = { matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)' }