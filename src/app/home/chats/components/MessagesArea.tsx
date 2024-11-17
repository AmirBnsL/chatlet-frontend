'use client';

import ChatBubble from "@/app/home/chats/components/ChatBubble";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getMessages, Message} from "@/lib/MessageQueries";
import {useWebSocket} from "@/app/context/WebSocketProvider";

interface MessagesAreaProps {
    name: string;
}

export default function MessagesArea({name}: MessagesAreaProps) {
    const [messages, setMessages] = useState<Array<Message>>([]);


    const {data, isSuccess} = useQuery({
        queryKey: ["messages", name],
        queryFn: () => getMessages(name),
    });


    const socket = useWebSocket();


    useEffect(() => {
        if (isSuccess && data) {
            console.log(data)
            setMessages(data);
        }
    }, [data]);

    useEffect(() => {
        setMessages((prev) => [...prev, ...socket.messages])
    }, [socket.messages]);

    return (
        <div className="w-full h-full bg-darkBrown flex flex-col gap-2 p-3 overflow-y-scroll">
            {messages.map((message: Message, index) => (
                <ChatBubble
                    sender={message.sender}
                    key={index}
                    message={message.message}
                    time={message.timestamp}
                    name={name}
                />
            ))}
        </div>
    );
}
