'use client'
import {logOut} from "@/lib/ProfileEditQueries";
import {useRouter} from "next/navigation";


export default function LogOutButton() {

    const router = useRouter();
    const handleLogOut = async () => {
        await logOut();
        router.push("/login")
    }

    return <div onClick={handleLogOut}
                className={"text-red-600 border-red-600 border-2 font-light px-8 py-2 rounded-md "}>Log
        Out</div>


}