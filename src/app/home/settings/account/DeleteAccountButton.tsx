'use client'
import {deleteAccount} from "@/lib/ProfileEditQueries";


export default function DeleteAccountButton() {

    return <button onClick={deleteAccount} className={"px-8 py-2 font-bold text-lg bg-teal text-white rounded-md"}>Delete Account</button>

}