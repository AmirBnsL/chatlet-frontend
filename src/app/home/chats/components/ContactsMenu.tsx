import SearchBar from "@/app/home/chats/components/SearchBar";
import {ReactNode} from "react";


export default async function ContactsMenu({menuTitle,children,action}:{menuTitle:string,children:ReactNode,action?:any }) {
    return <div className={"h-full min-w-[25%] flex flex-col  justify-start items-center bg-lessLightBrown"}>
        <h1 className={"text-white font-bold text-2xl self-start ml-9 my-4"}>{menuTitle}</h1>
        <SearchBar action={action} ></SearchBar>
        {children}
    </div>
}