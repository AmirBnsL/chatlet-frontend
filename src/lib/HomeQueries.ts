
import axios from "axios";
import {cookies} from "next/headers";


export default async function getContacts() {

    try {
        const token = cookies().get('token')?.value;

        const response = await axios.get("http://localhost:8080/contacts", {headers:
                {Authorization: `Bearer ${token}`},withCredentials: true} );
        console.log(response.status)
        return response.data.data;
    }   catch (error) {
        console.log(error)
    }

}