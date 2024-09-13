"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {useMutation} from "@tanstack/react-query";
import EditProfile from "@/lib/ProfileEditQueries";

interface Inputs {
    username: string;
    firstname: string;
    lastname: string;
    birth: string;
    gender: string;
}

const schema = z.object({
    username: z.string().min(8, "Username must be at least 8 characters"),
    firstname: z.string(),
    lastname: z.string(),
    birth: z.string(),  // Ensure birth is a string for date input
    gender: z.string()
});

function formField({ fieldName }: { fieldName: string }) {
    return (
        <div className="flex flex-col gap-1 justify-start w-full">
            <label className="text-sm" htmlFor={fieldName}>{fieldName}</label>
            <input className="px-4 py-2 bg-darkBrown outline focus:outline-teal text-lg rounded-md" type="text" id={fieldName} name={fieldName} />
        </div>
    );
}

export default function PersonalDataForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(schema) });





    return (
        <form action={EditProfile} className="flex flex-col justify-between gap-4 text-white grow" >
            <h1 className="text-lg font-bold">Your Personal Data</h1>
            <div className="flex flex-col justify-start gap-4">
                <div className="flex flex-col gap-1 justify-start w-full">
                    <label className="text-sm" htmlFor="username">Username</label>
                    <input
                        className="px-4 py-2 bg-darkBrown outline focus:outline-teal text-lg rounded-md"
                        type="text"
                        id="username"
                        {...register("username", { required: true })}
                    />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div className="flex flex-col gap-1 justify-start w-full">
                    <label className="text-sm" htmlFor="firstname">Firstname</label>
                    <input
                        className="px-4 py-2 bg-darkBrown outline focus:outline-teal text-lg rounded-md"
                        type="text"
                        id="firstname"
                        {...register("firstname", { required: true })}
                    />
                    {errors.firstname && <span>{errors.firstname.message}</span>}
                </div>
                <div className="flex flex-col gap-1 justify-start w-full">
                    <label className="text-sm" htmlFor="lastname">Lastname</label>
                    <input
                        className="px-4 py-2 bg-darkBrown outline focus:outline-teal text-lg rounded-md"
                        type="text"
                        id="lastname"
                        {...register("lastname", { required: true })}
                    />
                    {errors.lastname && <span>{errors.lastname.message}</span>}
                </div>
                <div className="flex flex-col gap-1 justify-start w-full">
                    <label className="text-sm" htmlFor="birth">Date of birth</label>
                    <input
                        className="px-4 py-2 bg-darkBrown outline focus:outline-teal text-lg rounded-md"
                        type="date"
                        id="birth"
                        {...register("birth", { required: true })}
                    />
                    {errors.birth && <span>{errors.birth.message}</span>}
                </div>
                <div className="flex flex-col gap-1 justify-start w-full">
                    <label className="text-sm" htmlFor="gender">Gender</label>
                    <input
                        className="px-4 py-2 bg-darkBrown outline focus:outline-teal text-lg rounded-md"
                        list="genders"
                        id="gender"
                        {...register("gender", { required: true })}
                    />
                    <datalist id="genders">
                        <option value="male" />
                        <option value="female" />
                    </datalist>
                    {errors.gender && <span>{errors.gender.message}</span>}
                </div>
            </div>
            <div className="flex items-center mt-8 gap-4">
                <button type="button" className="outline-white outline outline-1 px-8 py-2 rounded-md">Cancel</button>
                <button type="submit" className="bg-teal text-white font-bold px-6 py-2 rounded-md">Save changes</button>
            </div>
        </form>
    );
}
