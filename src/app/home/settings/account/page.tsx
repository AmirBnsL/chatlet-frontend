


export default function AccountPage() {
    return <>
        <div className={"p-16 flex flex-col items-start justify-between  h-full"}>
            <h1 className={"text-3xl font-bold text-white"}>Account Settings</h1>
            <div className={"flex gap-3 items-start justify-between"}>
                <button className={"px-8 py-2 font-light text-lg border-cream border-2 text-white rounded-md"}>Disable Account</button>
                <button className={"px-8 py-2 font-bold text-lg bg-teal text-white rounded-md"}>Delete Account</button>
            </div>
            <div className={"text-red-600 border-red-600 border-2 font-light px-8 py-2 rounded-md "}>Log Out</div>
        </div>
    </>
}