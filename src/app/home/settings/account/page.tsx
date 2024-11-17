import {DisableAccountButton} from "@/app/home/settings/account/DisableAccountButton";
import DeleteAccountButton from "@/app/home/settings/account/DeleteAccountButton";
import LogOutButton from "@/app/home/settings/account/LogOutButton";


export default async function AccountPage() {


    return <>
        <div className={"p-16 flex flex-col items-start justify-between  h-full"}>
            <h1 className={"text-3xl font-bold text-white"}>Account Settings</h1>
            <div className={"flex gap-3 items-start justify-between"}>
                <DisableAccountButton></DisableAccountButton>
                <DeleteAccountButton></DeleteAccountButton>
            </div>
            <LogOutButton></LogOutButton>
        </div>
    </>
}