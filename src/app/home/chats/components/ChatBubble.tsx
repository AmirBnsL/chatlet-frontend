//TODO: convert time to a date like this: today at 12:00 PM
export default function ChatBubble({message, sender, time, name}: {
    message: string,
    sender: string,
    time: string,
    name: string
}) {
    return <div className={`flex flex-col items-center  gap-2  ${sender == name ? "self-start" : "self-end"}`}>
        <div className={"flex items-center gap-2 "}>
            <h2 className={"text-white font-bold text-sm "}>{sender == name ? sender : "me"}</h2>
            <p className={"text-white font-light text-xs"}>{time}</p>
        </div>
        <div
            className={`bg-greyBrown text-white px-4 py-2 rounded-full ${sender == name ? "self-start" : "self-end"} `}>
            {message}
        </div>

    </div>
}