'use server'


import axios from "axios";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";


interface BackendResponse {
    status: bigint;
    message: string;
}

interface Inputs {
    username: string;
    firstname: string;
    lastname: string;
    birth: string;
    gender: string;
}

export async function EditProfile(formData: Inputs) {
    const token = cookies().get('token')?.value;

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
    const token = cookies().get('token')?.value;

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
    const token = cookies().get('token')?.value;

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
    const token = cookies().get('token')?.value;

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
    const token = cookies().get('token')?.value;


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

export async function getProfilePictureByUsername(username: string): Promise<BackendResponse | undefined> {
    const token = cookies().get('token')?.value;


    try {
        const response  = await fetch(`http://localhost:8080/profile/picture/base64/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
            cache: "no-cache",
        });

        const data = await response.json();

        return data as BackendResponse;
    } catch (e) {
        console.log(e)
    }
}

export async function getProfileData(): Promise<ProfileDto | undefined> {
    const token = cookies().get('token')?.value;

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
    base64Avatar: string;
}



