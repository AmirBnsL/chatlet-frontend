'use client'
import {SubmitHandler} from "react-hook-form";

import Form, {Inputs} from "@/app/login/components/Form";
import {JSX} from "react/jsx-runtime";
import IntrinsicAttributes = JSX.IntrinsicAttributes;
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useRouter} from "next/navigation";




export default function LoginForm() {

    const router = useRouter();
    const mutation = useMutation({
        mutationFn:  (data:Inputs) => {
            return axios.get("http://localhost:8080/token",{auth: {
                username: data.username,
                password: data.password
                }})
        },
        onSuccess: data =>  {
            console.log("mission seccesful")
            router.push("/home");
        }

    });

    const onSubmit :SubmitHandler<Inputs> & IntrinsicAttributes = (data, event) => {
        event?.preventDefault();
        console.log("i am here",data)
        if(data) {
            mutation.mutate(data);
        }

    };



    // @ts-ignore
    return <section className={"grow flex flex-col justify-start gap-5 items-center py-5 px-40 w-full"}>
        <h1 className={"text-3xl font-bold text-white py-5 w-full text-center"}>Welcome back to ChatLet</h1>
        <p className={"text-white text-l"}>Where you can chat with friends,family seamlessly</p>

        <Form onSubmit={onSubmit} buttonText="Login"/>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className={"text-cream text-sm"}>New to ChatLet? Don't have an account? Sign up!</p>

    </section>
}
