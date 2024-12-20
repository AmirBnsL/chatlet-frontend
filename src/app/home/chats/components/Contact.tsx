import Image from "next/image";
import Link from "next/link";
import { getProfileByPictureLink, getProfilePicture} from "@/lib/ProfileEditQueries";

export default async function Contact({avatarLink,name,lastMessage,lastMessageTime}:{avatarLink:string,name:string,lastMessage:string,lastMessageTime:string}) {

    const avatar = await getProfileByPictureLink(avatarLink);
    console.log({avatar});

    return <Link href={`/home/chats/${name}`} className={"w-full p-4 flex gap-3 items-center justify-evenly border-b-2 border-darkBrown"}>
        <div className={"relative h-14 w-14"}>
            <Image src={avatar || avatarLink} alt={"Account avatar"} fill={true}/>

        </div>
        <div className={"flex flex-col items-center justify-start"}>
            <h1 className={"text-white font-semibold self-start "}>{name}</h1>
            {lastMessage && <p className={"text-white"}>{lastMessage}</p>}
        </div>
        <div className={"text-white text-sm"}>{lastMessageTime}</div>
    </Link>
}