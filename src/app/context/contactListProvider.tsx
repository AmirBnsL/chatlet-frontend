'use client'

import {getProfilePictureByUsername} from "@/lib/ProfileEditQueries";
import {createContext, useContext, useEffect, useState} from "react";
import {ContactType, getContacts} from "@/lib/ContactQueries";

//TODO: fetch last message and last message time
//TODO: fix the types between front and back end

export interface ExtendedContact extends ContactType {
    base64Avatar:string;
    lastMessage: string;
    lastMessageTime: string;
}

async function Chats() : Promise<ExtendedContact[]> {
    const contacts: Array<ContactType> | undefined  = await getContacts();
    console.log(contacts);
    // Fetch profile pictures in parallel
    const extendedContacts : ExtendedContact[] | undefined = contacts && await Promise.all(contacts.map(async (contact) => {
        const avatar = await getProfilePictureByUsername(contact.username);
        console.log({avatar})
        return {...contact, base64Avatar: avatar?.message || ""};
    }));

    console.log({extendedContacts});
    return extendedContacts || [] as ExtendedContact[];

}

    const contactListContext = createContext<ExtendedContact[]>([]);


export function ContactListProvider({children}: { children: React.ReactNode }) {
    const [contacts, setContacts] = useState<ExtendedContact[]>([]);
    useEffect(() => {
        Chats().then((contacts) => {
            setContacts(contacts || [] as ExtendedContact[]);
        });
    }, []);
    return (
        <contactListContext.Provider value={contacts}>
            {children}
        </contactListContext.Provider>
    );
}

export function useContactList():ExtendedContact[] {
    return useContext(contactListContext);
}



export function useContact( contactName:string) {
    return useContext(contactListContext).find((contact) => contact.username === contactName);
}


