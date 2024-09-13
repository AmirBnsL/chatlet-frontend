'use server'

import axios from "axios";
import {cookies} from "next/headers";

export default async function EditProfile(formData:FormData) {
    const token = cookies().get('token')?.value;
    console.log(formData);

    const data =  Object.fromEntries(formData.entries());


    try {
    const response = await axios.post("http://localhost:8080/profile",data, {
        headers:{
        Authorization: `Bearer ${token}`
    }});
    console.log(response.data);
    } catch (error) {
        console.log(error)
    }



}

