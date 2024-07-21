'use client'
import {SubmitHandler, useForm} from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Form, {Inputs} from "@/app/login/components/Form";




export default function SignUpForm() {





        const mutation = useMutation({
            mutationFn: (formData: Inputs) => {
                return axios.post('http://localhost:8080/register', formData)
            },
        });







    const onSubmit :SubmitHandler<Inputs> = (data) => {
        //we do our fetching here
        console.log(data);
        mutation.mutate(data);

        
    };

    return <section className={"grow flex flex-col justify-start gap-5 items-center py-5 px-40 w-full"}>
        <h1 className={"text-3xl font-bold text-white py-5 w-full text-center"}>Welcome to ChatLet</h1>
        <p className={"text-white text-l"}>Where you can chat with friends,family seamlessly</p>

        <Form onSubmit={onSubmit} buttonText={"Sign Up"}/>

    </section>
}