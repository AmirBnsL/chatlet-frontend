import ChatAreaNavBar from "@/app/home/chats/components/ChatAreaNavBar";
import MessagesArea from "@/app/home/chats/components/MessagesArea";
import MessageInput from "@/app/home/chats/components/MessageInput";


export default function ChatArea() {
    return <div className={"w-3/4 h-full grow bg-darkBrown flex flex-col"}>
        <ChatAreaNavBar name={"Amir Benslaimi"} avatarLink={"/accountpic.png"}></ChatAreaNavBar>
        <MessagesArea></MessagesArea>
        <MessageInput></MessageInput>
    </div>
}