'use client'

import Image from "next/image";
import React from "react";
import {useMutation} from "@tanstack/react-query";
import addContact from "@/lib/ContactQueries";
import {ServerActionAction} from "next/dist/client/components/router-reducer/router-reducer-types";


interface Inputs {
    searchText: string;
}


export default function SearchBar({action}:{action:any}) {
    const [text, setText] = React.useState<string>("")

    const mutation = useMutation({
        mutationFn: (data: string) => {
            return action(data)
        }, onSuccess: (data) => {
            console.log(data)
        },onError: (error) => {
            console.log('error',error)
        }
    });

    const handleSubmit = (formData: string) => {
        // Prevent default form submission
        mutation.mutate(text);


        // Call the action function with form data
    };


    return <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(text)
    }} className={"flex gap-0 w-3/4  mb-2"}>
        <button className={"relative bg-greyBrown w-8 rounded-l-md p-2"} type={"submit"}>
            <Image src={"/search.svg"} alt={"search icon"} fill={true}/>
        </button>
        <input type={"text"} placeholder={"Search Friends"}
               className={"w-full bg-greyBrown text-white rounded-r-md p-2  "} onChange={(e) => {
            setText(e.target.value)
        }}/>
    </form>
}