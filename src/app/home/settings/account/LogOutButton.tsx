'use client'


import {logOut} from "@/lib/ProfileEditQueries";

export default function LogOutButton() {
    return <div onClick={logOut} className={"text-red-600 border-red-600 border-2 font-light px-8 py-2 rounded-md "}>Log Out</div>


}