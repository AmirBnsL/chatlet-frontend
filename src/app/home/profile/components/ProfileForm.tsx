import PersonalDataForm from "@/app/home/profile/components/PersonalDataForm";
import ProfilePictureUploader from "@/app/home/profile/components/ProfilePictureUploader";
import {getProfileData} from "@/lib/ProfileEditQueries";


export default async function ProfileForm() {
    const profileData = await getProfileData();
    return <div className={"flex gap-20 justify-start "}>
        {profileData && <PersonalDataForm profileData={profileData}></PersonalDataForm>}
        <ProfilePictureUploader avatarLink={"/accountpic.png"}></ProfilePictureUploader>

    </div>
}