'use client'
import {disableAccount} from "@/lib/ProfileEditQueries";


export async function DisableAccountButton() {

    return <button onClick={disableAccount} className={"px-8 py-2 font-light text-lg border-cream border-2 text-white rounded-md"}>Disable
        Account</button>


}