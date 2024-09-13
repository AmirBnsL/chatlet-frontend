import ChatAreaNavBar from "@/app/home/chats/components/ChatAreaNavBar";
import MessagesArea from "@/app/home/chats/components/MessagesArea";
import MessageInput from "@/app/home/chats/components/MessageInput";


interface ChatAreaProps {
    name: string;
    avatarLink: string;

}

export default function ChatArea({name,avatarLink}: ChatAreaProps) {
    return <div className={"w-3/4 h-full grow bg-darkBrown flex flex-col"}>
        <ChatAreaNavBar name={name} avatarLink={avatarLink}></ChatAreaNavBar>
        <MessagesArea></MessagesArea>
        <MessageInput></MessageInput>
    </div>
}