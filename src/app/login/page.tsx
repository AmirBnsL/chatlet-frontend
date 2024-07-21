import LoginForm from "@/app/login/components/LoginForm";
import Image from "next/image";
import {ReactNode} from "react";
import NavBar from "@/app/components/NavBar";




export default function Login(): ReactNode {

    return <div className={"h-full w-full flex flex-col justify-center items-center bg-darkBrown"}>
        <NavBar/>
        <LoginForm/>
    </div>
}