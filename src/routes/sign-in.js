import { useContext, useEffect, useState } from "react";
import ReactCodeInput from 'react-verification-code-input';
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import NHostClientContext from "../contexts/nhost-client.context";

const errorInputClassNames =
    "block py-2 w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md";

const defaultInputClassNames =
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md";

const passwordClassNames =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

const SignIn = () => {
    const nhost = useContext(NHostClientContext);
    const onSubmit = (data) => console.log(data, 'Form data');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        console.log(phone, 'phone');
    }, [phone])

    return (
        <div className="space-y-6">
            <PhoneInput
                defaultCountry="CA"
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'} />
            <ReactCodeInput autofocus onComplete={(c) => console.log(c, 'complete')} loading={false} />
            <div>
                <button
                    onClick={async () => {
                        const { session, error } = await nhost.auth.signIn({
                            phoneNumber: phone
                        });

                        console.log(session, error, 'NHOST AUTH');
                    }}
                    
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Next
                </button>
            </div>
        </div>)
}

export default SignIn;