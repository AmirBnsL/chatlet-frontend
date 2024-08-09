import ProfileForm from "@/app/home/profile/components/ProfileForm";


export default function ProfileSettingsArea() {
    return <div className={"h-full w-full grow flex flex-col gap-6 p-16 bg-darkBrown"}>
        <h1 className={"text-3xl font-bold text-white "}>Edit Profile</h1>
        <ProfileForm></ProfileForm>
        
    </div>
}