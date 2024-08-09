

export default function NotificationSettings() {
    return <div className={"p-16 h-full flex flex-col gap-16 items-start"}>
        <h1 className={"text-3xl font-bold text-white"}>Notification Settings</h1>
        <div className={"flex items-center justify-center"}>
        <label htmlFor={"notifications"} className={"text-white"} > Allow Notifications :</label>
            <input type={"checkbox"} />
        </div>
    </div>

}