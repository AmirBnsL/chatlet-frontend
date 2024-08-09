import ContactsMenu from "@/app/home/chats/components/ContactsMenu";
import MenuItem from "@/app/home/profile/components/MenuItem";
import {ReactNode} from "react";


export default function Settings({children}:{children:ReactNode}) {
    return <>

        <ContactsMenu menuTitle={"Settings"}>
            <MenuItem imageLink={"/AccountPlain.png"} name={"Account"} redirect={"/home/settings/account"} ></MenuItem>
            <MenuItem imageLink={"/bellIcon.png"} name={"Notifications"} redirect={"/home/settings/notifications"} ></MenuItem>
            <MenuItem imageLink={"/colorPalette.png"} name={"Theme"}  redirect={"/home/settings/theme"}></MenuItem>
        </ContactsMenu>
        {children}

    </>
}