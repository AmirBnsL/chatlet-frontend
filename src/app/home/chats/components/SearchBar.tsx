import Image from "next/image";

export default function SearchBar() {

    return <div className={"flex gap-0 w-3/4  mb-2"}>
        <div className={"relative bg-greyBrown w-8 rounded-l-md p-2"}>
        <Image src={"/search.svg"} alt={"search icon"} fill={true}/>
        </div>
        <input type={"text"} placeholder={"Search Friends"} className={"w-full bg-greyBrown text-white rounded-r-md p-2  "}/>
    </div>
}