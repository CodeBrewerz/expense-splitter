import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { isEmpty } from "ramda";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { object, string } from 'yup';


const errorInputClassNames =
    "block py-2 w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md";

const defaultInputClassNames =
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";

const passwordClassNames =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";


const SignUp = () => {
    const schema = object({
        email: string().email().required('Email is required'),
        password: string().required('Password is required'),
        firstName: string().required('First name is required'),
        lastName: string().required('Last name is required')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    }
    );

    const inputClassNames = classNames({
        [errorInputClassNames]: (!isEmpty(errors)),
        [defaultInputClassNames]: (isEmpty(errors)),
    });

    const onSubmit = (data) => console.log(data, 'Form data');

    useEffect(() => {
        console.log(errors, 'Errors');
    }, [errors])

    return (<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">


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
                    {...register("email")}

                    className={inputClassNames}

                    placeholder="you@example.com"
                    aria-invalid="true"
                    aria-describedby="email-error"
                />
                {errors?.email && (
                    <div className="absolute mt-4 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCircleIcon
                            className="h-5 w-5 text-red-500"
                            aria-hidden="true"
                        />
                    </div>
                )}
            </div>
            {errors.email?.message && (
                <p className="mt-2 text-sm text-red-600" id="email-error">
                    {errors.email?.message}
                </p>
            )}
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
                    type="password"
                    {...register("password")}
                    className={inputClassNames}
                />
                {errors.password?.message && (
                    <>
                        <div className="absolute mb-7 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <ExclamationCircleIcon
                                className="h-5 w-5 text-red-500"
                                aria-hidden="true"
                            />
                        </div>

                        <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                        >
                            {errors.password?.message}
                        </p>
                    </>

                )}
            </div>
        </div>
        <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
        </div>
    </form>)
}

export default SignUp;