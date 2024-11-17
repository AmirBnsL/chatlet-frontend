import 'server-only'
import {cookies} from "next/headers";
import axios from "axios";
import {redirect} from "next/navigation";

interface Session {
    auth: boolean;
    data: string;

}

export const verifyToken = async (): Promise<Session> => {
    const cookie = cookies().get("token")?.value;

    try {
        const response = await axios.get("http://localhost:8080/validate", {headers: {Authorization: "Bearer " + cookie}});
        return {auth: true, data: response.data.message};
    } catch (error) {
        console.log("failed to verify token")
        redirect("http://localhost:3000/login");
    }
}
