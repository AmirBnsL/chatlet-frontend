

import Form, {Inputs} from "@/app/login/components/Form";




export default async function LoginForm() {


    // @ts-ignore
    return <section className={"grow flex flex-col justify-start gap-5 items-center py-5 px-40 w-full"}>
        <h1 className={"text-3xl font-bold text-white py-5 w-full text-center"}>Welcome back to ChatLet</h1>
        <p className={"text-white text-l"}>Where you can chat with friends,family seamlessly</p>

        <Form  buttonText="Login"/>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className={"text-cream text-sm"}>New to ChatLet? Don't have an account? Sign up!</p>

    </section>
}
