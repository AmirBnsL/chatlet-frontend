

export default function ThemeSettings() {
    return <div className={"p-16 flex flex-col "}>
        <h1 className={"text-3xl font-bold text-white"}>Theme settings</h1>
        <div className={"flex items-center"}>
            <label htmlFor={"theme"}> Allow Notifications :</label>
            <input type={"checkbox"} id={"theme"}/>
        </div>
    </div>
}