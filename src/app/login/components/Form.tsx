'use client'
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {logIn} from "@/lib/LoginActions";

const schema = z.object({
    username: z.string().min(8, "Username must be at least 8 characters"),
    password: z.string().min(8, "Password must be at least 8 characters")
})
export type Inputs = {
    username: string
    password: string
}


export default function Form({ buttonText}: { buttonText: string }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>({resolver: zodResolver(schema)});




    return <form action={logIn} className={"flex justify-center items-center gap-3 flex-col w-full"} >
        <div className={" flex-col flex justify-start py-3 px-4 w-2/5 md:w-full max-w-md m-0"}>

            <label className={"text-white"} form={"username"}>Username</label>
            <input id={"username"} type={"text"} placeholder={"username"} {...register("username", {required: true})}
                   className={"p-4 w-full rounded-xl bg-lessLightBrown border-lightBrown border-[1px] placeholder:text-lightBrown"}/>
            {errors.username && <p className={"text-red-600 text-sm"}>{errors.username?.message}</p>}
        </div>
        <div className={" flex-col flex justify-start py-3 px-4 w-2/5 md:w-full max-w-md"}>
            <label form={"Password"} className={"text-white"}>Password</label>
            <input id={"password"} type={"password"}
                   placeholder={"Password"} {...register("password", {required: true})}
                   className={"p-4 w-full rounded-xl bg-lessLightBrown border-lightBrown border-[1px] placeholder:text-lightBrown"}/>
            {errors.password && <p className={"text-red-600 text-sm"}>{errors.password?.message}</p>}
        </div>
        <div className={"py-3 px-4 w-2/5 md:w-full max-w-md flex justify-center"}>
            <button type="submit" className={"px-4 p-2 text-white font-bold bg-teal rounded-xl w-full"}> {buttonText}
            </button>
        </div>
        <p className={"text-cream"}>or</p>
        <div className={"py-3 px-4 w-2/5 md:w-full max-w-md flex justify-center"}>
            <button type="submit"
                    className={"px-4 p-2 text-white font-bold bg-lessLightBrown rounded-xl w-full"}> Continue with SSO
            </button>
        </div>
    </form>

}