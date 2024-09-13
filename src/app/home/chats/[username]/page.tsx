import ChatArea from "@/app/home/chats/components/ChatArea";


export default  function Page({params}:{username:string}) {
    return <ChatArea name={params.username} avatarLink={"/account.pic"}></ChatArea>

    ;
}