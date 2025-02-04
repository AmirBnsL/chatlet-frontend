import {getProfilePicture} from "@/lib/ProfileEditQueries";
import Image from "next/image";


export async function DownloadedImage() {
    const picture = await getProfilePicture();
    console.log("picture", picture)


    return <div className={"relative w-44 h-44 rounded"}>
        <Image src={picture || ""} alt={"Profile Picture"} fill={true}></Image>
    </div>

}