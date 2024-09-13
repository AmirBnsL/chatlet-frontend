import PersonalDataForm from "@/app/home/profile/components/PersonalDataForm";
import ProfilePictureUploader from "@/app/home/profile/components/ProfilePictureUploader";


export default async function ProfileForm() {
    return <div className={"flex gap-20 justify-start "}>
        <PersonalDataForm></PersonalDataForm>
        <ProfilePictureUploader avatarLink={"/accountpic.png"}></ProfilePictureUploader>

    </div>
}