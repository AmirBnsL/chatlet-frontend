
import {ReactNode} from "react";
import SignUpForm from "@/app/signup/components/SignUpForm";
import NavBar from "@/app/components/NavBar";


export default function Login(): ReactNode {

    return <div className={"h-full w-full flex flex-col justify-center items-center bg-darkBrown"}>
        <NavBar/>
        <SignUpForm/>
    </div>
}