'use server'

import axios from "axios";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";

const token = cookies().get('token')?.value;

interface Inputs {
    username: string;
    firstname: string;
    lastname: string;
    birth: string;
    gender: string;
}

export async function EditProfile(formData: Inputs) {
    console.log(formData);


    try {
        const response = await axios.post("http://localhost:8080/profile", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }


}


export async function disableAccount() {
    try {
        await axios.post("http://localhost:8080/disable", null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {
        console.log(e)
    }


}

export async function deleteAccount() {
    try {
        await axios.delete("http://localhost:8080/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {
        console.log(e)
    }


}

export async function logOut() {

    try {

        cookies().delete('token');
        revalidatePath("/home/profile")

    } catch (e) {
        console.log(e);
    }

}


export async function uploadProfilePicture(formData: FormData) {
    try {
        const blob = formData.get("file") as Blob;
        console.log({blob})

        const response = await axios.post("http://localhost:8080/picture", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });

        console.log(response.data);
        revalidatePath("/home/profile")
    } catch (e) {
        console.log(e)
    }
}


export async function getProfilePicture(): Promise<string | undefined> {

    try {
        const response = await fetch("http://localhost:8080/profile/picture", {
            next: {
                tags: ["token"]
            },
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET"
        });

        console.log(response.status);


        const arrayBuffer = await response.arrayBuffer(); // Convert to ArrayBuffer
        const buffer = Buffer.from(arrayBuffer); // Convert to Buffer
        return `data:${response.headers.get('Content-Type')};base64,${buffer.toString(
            'base64'
        )}`;


    } catch (e) {
        console.log({"error": "failed to get profile picture"});
    }


}

export async function getProfileData(): Promise<ProfileDto | undefined> {
    try {
        const response = await fetch("http://localhost:8080/profile", {

            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
            cache: "no-cache",
        });
        return response.json();
    } catch (e) {
        console.log(e)
    }
}

export interface ProfileDto {
    username: string;
    firstname: string;
    lastname: string;
    birth: string;
    gender: string;
    pictureLink: string;
}



