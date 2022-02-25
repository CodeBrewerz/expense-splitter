import classNames from "classnames";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import NHostClientContext from '../contexts/nhost-client.context';

export default function SignUp() {
    const nhost = useContext(NHostClientContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        shouldUseNativeValidation: true
    });
    const validationSchema = yup.object({
        email: yup.string().required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const errorInputClassNames =
        "block py-2 w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md";

    const defaultInputClassNames =
        "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";

    const passwordClassNames =
        "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

    const inputClassNames = classNames({
        [errorInputClassNames]: errors,
        [defaultInputClassNames]: !errors,
    });


    const onSubmit = async (data) => {
        console.log("RESULT", data);
        alert(JSON.stringify(data));

        const { session, error } = await nhost.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                displayName: data.firstName.concat(data.lastName)
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="flex">
                {/* First and last name inputs */}
                <div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            {...register("firstName", {
                                required: "Please enter your firstName."
                            })}

                            className={inputClassNames}
                            placeholder="John Doe"
                            aria-invalid="true"
                            aria-describedby="email-error"
                        />
                        {/* {actionData?.errorMessage && (
                        <div className="absolute mt-4 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                            />
                        </div>
                    )} */}
                    </div>
                    {/* {actionData?.errorMessage && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {actionData?.errorMessage}
                    </p>
                )} */}
                </div>

                <div>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            {...register("lastName", {
                                required: "Please enter your last Name."
                            })}

                            className={inputClassNames}
                            placeholder="you@example.com"
                            aria-invalid="true"
                            aria-describedby="email-error"
                        />
                        {/* {actionData?.errorMessage && (
                        <div className="absolute mt-4 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                            />
                        </div>
                    )} */}
                    </div>
                    {/* {actionData?.errorMessage && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {actionData?.errorMessage}
                    </p>
                )} */}
                </div>
            </div>

            {/* Email Field */}
            <div>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "Please enter your Email."
                        })}

                        className={inputClassNames}
                        placeholder="you@example.com"
                        aria-invalid="true"
                        aria-describedby="email-error"
                    />
                    {/* {actionData?.errorMessage && (
                        <div className="absolute mt-4 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                            />
                        </div>
                    )} */}
                </div>
                {/* {actionData?.errorMessage && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                        {actionData?.errorMessage}
                    </p>
                )} */}
            </div>
            {/* Password Field */}
            <div className="space-y-1">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <div className="mt-1 relative rounded-md">
                    <input

                        name="password"
                        type="password"
                        {...register("password", {
                            required: "Please enter your password."
                        })}

                        className={inputClassNames}
                    />
                    {/* {actionData?.errorMessage && (
                        <div className="absolute mb-7 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                            />
                        </div>
                    )} */}
                    {/* {actionData?.errorMessage && (
                        <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                        >
                            {actionData?.errorMessage}
                        </p>
                    )} */}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                    >
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <button
                    // disabled={transition.state === "submitting"}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {/* {transition.state === "submitting"
                        ? "Signing in..."
                        : "Sign In"} */}
                    Sign Up
                </button>
            </div>
        </form>
    );
};
