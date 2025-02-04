import ChatArea from "@/app/home/chats/components/ChatArea";

interface Params {
    username: string
}
//TODO: sharing state between chat area and contacts menu
export default function Page({params}: { params: Params }) {
    return <ChatArea name={params.username}></ChatArea>
}