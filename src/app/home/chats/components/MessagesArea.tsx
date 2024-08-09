import ChatBubble from "@/app/home/chats/components/ChatBubble";


export default function MessagesArea() {
    return <div className={"w-full h-full bg-darkBrown flex flex-col gap-2 p-3"}>
        <ChatBubble message={"Hello?"} sender={"Amir Benslaimi"} time={"0:48 am"}></ChatBubble>
    </div>
}