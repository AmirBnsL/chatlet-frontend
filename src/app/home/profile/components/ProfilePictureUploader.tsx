import {DownloadedImage} from "./DownloadedImage";
import {UploadImageForm} from "@/app/home/profile/components/UploadImageForm";

export default function ProfilePictureUploader() {


    return <div className={"flex justify-center items-center flex-col gap-8 basis-1/4"}>
        <h1 className={"text-white font-semibold"}>Profile Picture</h1>
        <DownloadedImage></DownloadedImage>
        <UploadImageForm></UploadImageForm>

    </div>
}