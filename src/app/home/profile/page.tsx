import ContactsMenu from "@/app/home/chats/components/ContactsMenu";
import MenuItem from "@/app/home/profile/components/MenuItem";
import ProfileSettingsArea from "@/app/home/profile/components/ProfileSettingsArea";


export default function Profile() {
    return <>
        <ContactsMenu menuTitle={"Profile Settings"}>
            <MenuItem imageLink={"/pencil.png"} name={"Edit profile settings"} redirect={"/profile/edit"}></MenuItem>
        </ContactsMenu>
        <ProfileSettingsArea></ProfileSettingsArea>
    </>

}