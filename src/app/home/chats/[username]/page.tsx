import ChatArea from "@/app/home/chats/components/ChatArea";

interface Params {
    username: string
}

export default function Page({params}: { params: Params }) {
    return <ChatArea name={params.username} avatarLink={"/account.pic"}></ChatArea>

        ;
}