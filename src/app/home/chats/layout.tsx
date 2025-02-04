import {ReactNode} from "react";
import Chats from "@/app/home/chats/chats";
import {ContactListProvider} from "@/app/context/contactListProvider";


export default async function Layout({children}: {children: ReactNode}) {

    return (
        <>
            <ContactListProvider>
                <Chats></Chats>
                {children}
            </ContactListProvider>
        </>
    );
}