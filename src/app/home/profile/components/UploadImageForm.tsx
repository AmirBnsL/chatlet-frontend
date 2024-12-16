import {uploadProfilePicture} from "@/lib/ProfileEditQueries";

export async function UploadImageForm() {


    return <form action={uploadProfilePicture} className={"flex flex-col justify-center items-center gap-3"}>
        <input type={"file"} name={"file"} className={"text-white "}/>

        <button type={"submit"} className={"px-6 py-3 text-white bg-teal w-full rounded-full font-bold h"}>Upload
        </button>
    </form>
}