import Image from "next/image";


export default function MessageInput() {
    return <div className={"w-full flex items-center justify-center px-6 py-3"}>
        <div className={"flex justify-between items-center w-full bg-greyBrown rounded-xl gap-4 px-4 py-2 "}>
            <input type="text" className={"w-3/4  text-white bg-greyBrown rounded-2xl grow placeholder:text-cream"}
                   placeholder={"Send a message"}/>
            <div className={"relative w-6 h-6  bg-greyBrown  self-center"}>
                <Image src={"/Attach.svg"} alt={"attach file"} fill={true}/>
            </div>
            <button className={"bg-teal font-bold text-white px-7 py-2 rounded-xl"}>Send</button>

        </div>
    </div>
}