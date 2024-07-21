import Image from "next/image";


export default function NavBar() {
    return <nav className={"w-full h-16 flex items-center justify-start border-b border-cream px-10"}>
        <div className={"flex items-center gap-4"}>
            <Image src={"/Vector.png"} alt={"chat bubble"} width={16} height={16}/>
            <h1 className={"text-white font-bold  text-l"}>ChatLet</h1>
        </div>

    </nav>;
}