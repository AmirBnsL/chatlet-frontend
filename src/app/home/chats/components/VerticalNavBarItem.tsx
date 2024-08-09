'use client'
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function VerticalNavBarItem({link,redirect}:{link:string,redirect:string}) {
    const pathname = usePathname();
    const isActive = pathname=== redirect;
    return <div className={`w-full flex justify-center items-center p-3 ${isActive ? "bg-teal " :""}`}>

        <Link href={redirect} className={"w-14 h-14 rounded-full flex justify-center items-center relative"}>
        <Image src={link} alt={"chat bubble"} fill={true}/>
    </Link>

        </div>;
}