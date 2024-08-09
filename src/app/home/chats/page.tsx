import VerticalNavBar from "@/app/home/chats/components/VerticalNavBar";
import VerticalNavBarItem from "@/app/home/chats/components/VerticalNavBarItem";
import ContactsMenu from "@/app/home/chats/components/ContactsMenu";
import Contact from "@/app/home/chats/components/Contact";
import ChatArea from "@/app/home/chats/components/ChatArea";


export default function chats() {
    return (
        <>

            <ContactsMenu menuTitle={"chats"}>
                <Contact lastMessageTime={"12:10 am"} lastMessage={"how are you doing?"} avatarLink={"/accountpic.png"} name={"Amir Benslaimi"}/>
                <Contact lastMessageTime={"12:10 am"} lastMessage={"how are you doing?"} avatarLink={"/accountpic.png"} name={"Amir Benslaimi"}/>
                <Contact lastMessageTime={"12:10 am"} lastMessage={"how are you doing?"} avatarLink={"/accountpic.png"} name={"Amir Benslaimi"}/>
                <Contact lastMessageTime={"12:10 am"} lastMessage={"how are you doing?"} avatarLink={"/accountpic.png"} name={"Amir Benslaimi"}/>
            </ContactsMenu>
            <ChatArea></ChatArea>
        </>
    );
}