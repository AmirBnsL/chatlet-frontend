
import ContactsMenu from "@/app/home/chats/components/ContactsMenu";
import addContact from "@/lib/ContactQueries";



export default async function InvitePage() {






    return <ContactsMenu menuTitle={"Add contact"} action={addContact} >
    <></>
    </ContactsMenu>
}
