'use client'

import ContactsMenu from "@/app/home/chats/components/ContactsMenu";
import Contact from "@/app/home/chats/components/Contact";
import {ExtendedContact, useContactList} from "@/app/context/contactListProvider";


//changed from fetching in each contact to fetching with contacts, so I can fetch in parallel


export default function Chats() {
    const contacts: ExtendedContact[] = useContactList()
    console.log("contacts in Chat", contacts)



    return (
        <ContactsMenu menuTitle={"chats"}>
            {contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    name={contact.username}
                    avatarLink={contact.base64Avatar}
                    lastMessage={contact.lastMessage}
                    lastMessageTime={contact.lastMessageTime}
                />
            ))}
        </ContactsMenu>
    );
}