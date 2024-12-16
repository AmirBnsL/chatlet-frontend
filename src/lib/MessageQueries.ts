'use server'

import axios from "axios";
import {cookies} from "next/headers";

export interface Message {
    message: string;
    type: string;
    receiver: string;
    sender: string;
    timestamp: string;

}

export async function getMessages(friendName: string): Promise<Array<Message>> {
    try {
        const response = await axios("http://localhost:8080/messages?", {
                params: {
                    friendName: friendName,
                }
                ,
                headers: {
                    Authorization: `Bearer ${cookies().get("token")?.value}`,
                }
            }
        );
        console.log("request data ", response.data);
        return response.data;
    } catch (e
        ) {
        console.error(e);
        return [];
    }
}

export async function getWebsocket() {
    try {
        return new WebSocket("ws://localhost:8080/ws/message" + cookies().get("token")?.value);
    } catch (e) {
        console.error(e);
    }
}


export async function sendMessage() {

}