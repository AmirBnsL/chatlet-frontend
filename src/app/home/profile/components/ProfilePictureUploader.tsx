import Image from "next/image";


export default function ProfilePictureUploader({avatarLink}:{avatarLink:string}) {
    return <div className={"flex justify-center items-center flex-col gap-8 basis-1/4"}>
        <h1 className={"text-white font-semibold"}>Profile Picture</h1>
        <div className={"relative w-44 h-44"}>
            <Image src={avatarLink} alt={"Profile Picture"} fill={true}></Image>
        </div>

        <button className={"px-6 py-3 text-white bg-teal w-full rounded-full font-bold"}>Upload</button>


    </div>
}