
import axios from "axios";
import {redirect} from "next/navigation";

export async function logIn(data:FormData) {

    try {


    const response = await axios.get("http://localhost:8080/token",{auth: {
            username: data.get('username') as string,
            password: data.get('password') as string
        },withCredentials:true});

        console.log("seccessful")




    } catch (error) {
        console.error(error)
    } finally {
            redirect("/home/chats")

    }
}