'use client'
import {SubmitHandler, useForm} from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import ThreeInputForm from "@/app/signup/components/ThreeInputForm";
import {Inputs} from "@/app/signup/components/ThreeInputForm";
import {useRouter} from "next/navigation";



export default function SignUpForm() {





        const mutation = useMutation({
            mutationFn: (formData: Inputs) => {
                return axios.post('http://localhost:8080/register', formData)
            },onSuccess: (data) => {
                router.push('/register/success')
            }
        });



        const router = useRouter()



    const onSubmit :SubmitHandler<Inputs> = async (data) => {
        //we do our fetching here
         await mutation.mutateAsync(data);

    };

    return <section className={"grow flex flex-col justify-start gap-5 items-center py-5 px-40 w-full"}>
        <h1 className={"text-3xl font-bold text-white py-5 w-full text-center"}>Welcome to ChatLet</h1>
        <p className={"text-white text-l"}>Where you can chat with friends,family seamlessly</p>

        <ThreeInputForm onSubmit={onSubmit} buttonText={"Sign Up"}/>
        <p className={"text-red-600 font-semibold"}>{ mutation.error?.response.data.message}</p>
    </section>
}