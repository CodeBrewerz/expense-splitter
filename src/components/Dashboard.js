import { useEffect, useState } from 'react'
import {
    CurrencyDollarIcon,
    ScaleIcon,
} from '@heroicons/react/outline'
import {
    CashIcon,
    ChevronRightIcon,
} from '@heroicons/react/solid'
import { useNhostAuth } from '@nhost/react-auth'

const cards = [
    { name: 'Total Spend', href: '#', icon: ScaleIcon, amount: '$659.45', bgColor: 'bg-sky-100', textColor: 'text-sky-800' },
    { name: 'Owe', href: '#', icon: CurrencyDollarIcon, amount: '$30.45', bgColor: 'bg-red-100', textColor: 'text-red-800' },
    { name: 'Owed', href: '#', icon: CurrencyDollarIcon, amount: '$629.45', bgColor: 'bg-green-100', textColor: 'text-green-800' },
    // More items...
]
const transactions = [
    {
        id: 1,
        name: 'Payment to Molly Sanders',
        href: '#',
        amount: '$20,000',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
    },
    // More transactions...
]
const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// Dashboard state 
/*
    user signs in -> redirect to Dashboard
    // fetch user info, user balance, 
*/

/**
 * /transactions ->
 *  PlaidSettedUp 
 * - true
 *       Use plaid api to fetch transactions
 *       show table with presets to fetch transactions based on dates, 
 *       on selection of transactions -> POST list of transaction to db
 *              Also what to do if user tries to post a transaction which already exist -> ? 
 *       add snackbar to notify user "added to list for reconcilations"
 * - false 
 *       add screen to start by setting up plaid and redirect to /account page
 * 
 * /reconcilation -> fetch transaction from db 
 *      - if list empty -> redirect user to /transactions "Start by adding some transactions to reconcil"
 *         else ->  view drag drop containers 
 */



export default function Dashboard() {
    const { user, isLoading, isAuthenticated } = useNhostAuth();

    useEffect(() => {
        console.log(user, "user")
    }, [user]);

    return (
        <main className="flex-1 pb-8">
            <div className="mt-8">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card */}
                        {cards.map((card) => (
                            <div key={card.name} className={`${card.bgColor} overflow-hidden shadow rounded-lg`}>
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <card.icon className={`h-6 w-6 ${card.textColor}`} aria-hidden="true" />
                                        </div>
                                        <div className="ml-5 w-0 flex-1">
                                            <dl>
                                                <dt className={`text-sm font-medium ${card.textColor} truncate`}>{card.name}</dt>
                                                <dd>
                                                    <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-5 py-3">
                                    <div className="text-sm">
                                        <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
                    Recent activity
                </h2>

                {/* Activity list (smallest breakpoint only) */}
                <div className="shadow sm:hidden">
                    <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                        {transactions.map((transaction) => (
                            <li key={transaction.id}>
                                <a href={transaction.href} className="block px-4 py-4 bg-white hover:bg-gray-50">
                                    <span className="flex items-center space-x-4">
                                        <span className="flex-1 flex space-x-2 truncate">
                                            <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span className="flex flex-col text-gray-500 text-sm truncate">
                                                <span className="truncate">{transaction.name}</span>
                                                <span>
                                                    <span className="text-gray-900 font-medium">{transaction.amount}</span>{' '}
                                                    {transaction.currency}
                                                </span>
                                                <time dateTime={transaction.datetime}>{transaction.date}</time>
                                            </span>
                                        </span>
                                        <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <nav
                        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                        aria-label="Pagination"
                    >
                        <div className="flex-1 flex justify-between">
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                            >
                                Previous
                            </a>
                            <a
                                href="#"
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                            >
                                Next
                            </a>
                        </div>
                    </nav>
                </div>

                {/* Activity table (small breakpoint and up) */}
                <div className="hidden sm:block">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col mt-2">
                            <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Transaction
                                            </th>
                                            <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Amount
                                            </th>
                                            <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id} className="bg-white">
                                                <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    <div className="flex">
                                                        <a href={transaction.href} className="group inline-flex space-x-2 truncate text-sm">
                                                            <CashIcon
                                                                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                aria-hidden="true"
                                                            />
                                                            <p className="text-gray-500 truncate group-hover:text-gray-900">
                                                                {transaction.name}
                                                            </p>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                    <span className="text-gray-900 font-medium">{transaction.amount} </span>
                                                    {transaction.currency}
                                                </td>
                                                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                                    <span
                                                        className={classNames(
                                                            statusStyles[transaction.status],
                                                            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                                        )}
                                                    >
                                                        {transaction.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                                    <time dateTime={transaction.datetime}>{transaction.date}</time>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Pagination */}
                                <nav
                                    className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                    aria-label="Pagination"
                                >
                                    <div className="hidden sm:block">
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                            <span className="font-medium">20</span> results
                                        </p>
                                    </div>
                                    <div className="flex-1 flex justify-between sm:justify-end">
                                        <a
                                            href="#"
                                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                            Previous
                                        </a>
                                        <a
                                            href="#"
                                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                            Next
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
