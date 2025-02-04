'use client'

import Image from "next/image";
import {useContact} from "@/app/context/contactListProvider";

export default function ChatAreaNavBar({ name}: {
    name: string;
}) {

    const contact = useContact(name);




    return (<div
            className={"w-full  flex bg-greyBrown items-center justify-between px-5 py-2"}
        >
            <div className={"flex justify-center items-center gap-3"}>
                <div className={"h-14 w-14 relative"}>
                    <Image src={ contact?.base64Avatar || "" } alt={"Avatar picture"} fill={true}/>
                </div>
                <h1 className={"text-white font-bold text-xl"}>{name}</h1>
            </div>

            <div className={"h-6 w-6 relative"}>
                <Image src={"/threeDots.png"} alt={"options"} fill={true}/>
            </div>
        </div>);
}
