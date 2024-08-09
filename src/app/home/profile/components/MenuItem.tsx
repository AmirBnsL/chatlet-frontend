import Image from "next/image";
import Link from "next/link";


export default function MenuItem({imageLink,name,redirect}:{imageLink:string,name:string,redirect:string}) {
    return <Link href={redirect} className={"w-full p-4 flex gap-6 items-center justify-start border-b-2 border-darkBrown"}>
        <div className={"relative h-14 w-14"}>
            <Image src={imageLink} alt={"Account avatar"}fill={true} />
        </div>
        <div className={"flex flex-col items-center justify-center"}>
            <h1 className={"text-white font-semibold  "}>{name}</h1>
        </div>
    </Link>
}