


export default function VerticalNavBar({children}:{children:React.ReactNode }) {
    return <nav className={"max-w-24  h-full flex flex-col items-center justify-start self-start  bg-greyBrown"}>
        <div className={"flex flex-col  items-center gap-0 "}>
            {children}
           
        </div>
    </nav>;
}