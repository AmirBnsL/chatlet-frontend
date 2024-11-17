import React from "react";
import VerticalNavBarItem from "@/app/home/chats/components/VerticalNavBarItem";
import VerticalNavBar from "@/app/home/chats/components/VerticalNavBar";


const NavLinks = [
    {id:1,link: "/home/profile", image: "/accountpic.png"},
    {id:2,link: "/home/settings", image: "/settings.svg"},
    {id:3,link: "/home/chats", image: "/chat.png"},
    {id:4,link:"/home/invite",image:"/plusAccount.png"},

]

export default function homeLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return <div className={"h-full w-full flex  justify-start items-center bg-darkBrown"}>
        <VerticalNavBar>
            {NavLinks.map((navLink) => <VerticalNavBarItem link={navLink.image} redirect={navLink.link} key={navLink.id}></VerticalNavBarItem>)}
        </VerticalNavBar>
        {children}
    </div>
}