import ChatAreaNavBar from "@/app/home/chats/components/ChatAreaNavBar";
import MessagesArea from "@/app/home/chats/components/MessagesArea";
import MessageInput from "@/app/home/chats/components/MessageInput";
import {cookies} from "next/headers";
import {WebSocketProvider} from "@/app/context/WebSocketProvider";
import {verifyToken} from "@/lib/dal/dal";


interface ChatAreaProps {
    name: string;

}


export default async function ChatArea({name}: ChatAreaProps) {

    const cookie = cookies().get('token')?.value;

    const username = await verifyToken()
    //we use name to fetch messages which is a websocket really
    //we use name in message input to send messages to a route

    return <div className={"w-3/4 h-full grow bg-darkBrown flex flex-col"}>
        <WebSocketProvider cookie={cookie}>
            <ChatAreaNavBar name={name} ></ChatAreaNavBar>
            <MessagesArea name={name}></MessagesArea>
            <MessageInput name={name} username={username.data}></MessageInput>
        </WebSocketProvider>
    </div>
}