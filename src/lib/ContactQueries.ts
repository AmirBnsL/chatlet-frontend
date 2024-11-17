'use server'
import {cookies} from "next/headers";
import axios from "axios";

interface contact {
    contactName: string;
}

export default async function addContact(data: string) {
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
        console.log("we won");
        return response.data;
    } catch (error) {
        console.error(error)
        
    }


}
