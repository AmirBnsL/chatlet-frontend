import ContactsMenu from "@/app/home/chats/components/ContactsMenu";
import Contact from "@/app/home/chats/components/Contact";
import getContacts from "@/lib/HomeQueries";

interface Contact {
    username: string;
    pictureLink: string;

}



export default async function Chats() {
    const contacts : Array<Contact> = await getContacts();
    console.log(contacts)

    return (
        <>
            <ContactsMenu menuTitle={"chats"}>
                {contacts?.map((contact) => <Contact key={contact.username} name={contact.username} avatarLink={contact.pictureLink} lastMessage={"something"} lastMessageTime={"2:10pm"}></Contact>)}

            </ContactsMenu>
        </>
    );
}