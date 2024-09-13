import {ReactNode} from "react";
import Chats from "@/app/home/chats/chats";




export default async function Layout({children}: {children: ReactNode}) {

    return (
        <>
            <Chats></Chats>
            {children}
        </>
    );
}