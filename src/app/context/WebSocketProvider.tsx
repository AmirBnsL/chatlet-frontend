// app/context/WebSocketContext.tsx
"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import {Message} from "@/lib/MessageQueries";

interface WebSocketContextProps {
    messages: Message[];
    sendMessage: (message: string) => void;
}

const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode, cookie: string | undefined }> = ({
                                                                                                           children,
                                                                                                           cookie
                                                                                                       }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080/ws/message?token=" + cookie);
        setSocket(ws);

        ws.onmessage = (event) => {
            console.log(event.data);
            const data: Message = JSON.parse(event.data);
            const message = {
                message: data.message,
                sender: data.sender,
                receiver: data.receiver,
                timestamp: data.timestamp,
                type: data.type
            }
            setMessages((prev) => [...prev, message])
        };
        ws.onclose = () => console.log("WebSocket disconnected");

        return () => ws.close();
    }, []);

    const sendMessage = (message: string) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        }
    };

    return (
        <WebSocketContext.Provider value={{messages, sendMessage}}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = (): WebSocketContextProps => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error("useWebSocket must be used within a WebSocketProvider");
    }
    return context;
};
