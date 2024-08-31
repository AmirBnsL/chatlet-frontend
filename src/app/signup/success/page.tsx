import Link from "next/link";


export default function SeccessfulRegisterPage() {
    return <div className={"h-full w-full flex justify-center items-center flex-col bg-darkBrown text-cream"}>
        <h1 className={"font-bold text-3xl"}>Registration Successful</h1>
        <p>Thank you for registering <Link href={"/login"} className={"text-teal"}>To log In.</Link></p>

    </div>
}