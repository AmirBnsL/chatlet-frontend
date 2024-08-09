

export default function ChatBubble({message,sender,time}: {message: string, sender: string, time: string}) {
    return <div className={"flex flex-col items-center  gap-2  self-end" }>
        <div className={"flex items-center gap-2 "}>
            <h2 className={"text-white font-bold text-sm "}>{sender}</h2>
            <p className={"text-white font-light text-xs"}>{time}</p>
        </div>
        <div className={"bg-greyBrown text-white px-4 py-2 rounded-full self-end "}>
            {message}
        </div>

    </div>
}