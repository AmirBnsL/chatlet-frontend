'use server'
import {cookies} from "next/headers";
import axios from "axios";

export interface ContactType {
    id:bigint;
    username: string;
}

export async function addContact(data: string) {
    console.log(data);


    try {
        const response = await axios.post("http://localhost:8080/contact", null,{
            params: {
                contactName: data
            },
            headers: {
                Authorization: "Bearer " + cookies().get('token')?.value
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
        
    }


}

export async function getContacts(): Promise<Array<ContactType> | undefined> {

    try {
        const token = cookies().get('token')?.value;

        const response = await axios.get("http://localhost:8080/contacts", {headers:
                {Authorization: `Bearer ${token}`},withCredentials: true} );
        console.log(response.data);
        return response.data;
    }   catch (error) {
        console.log(error)
    }

}