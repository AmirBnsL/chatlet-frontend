'use server'

import axios from "axios";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
    const token = cookies().get('token')?.value;

export async function EditProfile(formData:FormData) {
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




export async function disableAccount() {
    try {
    const response = await axios.post("http://localhost:8080/disable",null,{headers:{
        Authorization: `Bearer ${token}`
        }});
    }   catch (e) {
        console.log(e)
    }


}

export async function deleteAccount() {
    try {
        const response = await axios.delete("http://localhost:8080/profile",{headers:{
                Authorization: `Bearer ${token}`
            }});
    }   catch (e) {
        console.log(e)
    }


}

export async function logOut() {

    try {

        cookies().delete('token');

        redirect("/login");

    }  catch (e) {
        console.log(e);
    }

}



