import {ReactNode} from "react";
import NavBar from "@/app/components/NavBar";
import LoginForm from "@/app/login/components/LoginForm";


export default function Login(): ReactNode {

    return <div className={"h-full w-full flex flex-col justify-center items-center bg-darkBrown"}>
        <NavBar/>
        <LoginForm/>
    </div>
}