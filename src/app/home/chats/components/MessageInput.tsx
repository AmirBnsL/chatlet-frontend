'use client';

import Image from "next/image";
import {FormEvent} from "react";
import {useWebSocket} from "@/app/context/WebSocketProvider";

interface MessageInputProps {
    name: string,
    username: string
}

export default function MessageInput({name, username}: MessageInputProps) {

    const socket = useWebSocket();


    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = e.currentTarget.querySelector("input")?.value;
        if (message?.trim() === "") return;
        socket?.sendMessage(JSON.stringify({
            message: message,
            receiver: name,
            sender: username,
            type: "text"
        }));
        console.log("message sent", message, name, "me")

        e.currentTarget.querySelector("input")!.value = "";
    };

    return (
        <div className="w-full flex items-center justify-center px-6 py-3">
            <form className="flex justify-between items-center w-full bg-greyBrown rounded-xl gap-4 px-4 py-2"
                  onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    className="w-3/4 text-white bg-greyBrown rounded-2xl grow placeholder:text-cream"
                    placeholder="Send a message"


                />
                <div className="relative w-6 h-6 bg-greyBrown self-center">
                    <Image src="/Attach.svg" alt="attach file" fill/>
                </div>

                <button
                    className="bg-teal font-bold text-white px-7 py-2 rounded-xl"
                    type={"submit"}
                    disabled={false}
                >
                    Send
                </button>
            </form>
        </div>
    );
}
