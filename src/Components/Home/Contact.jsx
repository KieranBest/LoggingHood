import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import contacts from "../../Data/Contacts.json"

export const Contact = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    function handleClick(email) {
        setEmail(email);
        navigate("/contact", { state: email } )
    }

    return (
        <section className="z-0" id="intro">
            <div className="px-20 text-center py-10">
                <h1 className="pb-10">Who to Contact?</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {contacts.map(contacts => (
                        <div key={contacts.id} className="h-[25vh] min-h-lg w-full rounded-lg overflow-hidden bg-white">
                            <div className="p-10 ">
                                <h5 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white">{contacts.title}</h5>
                                <p className="mb-4 font-normal text-black dark:text-white text-wrap">{contacts.description}</p>
                                <a onClick={() => handleClick(contacts.id)}
                                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Contact us!
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                                <p>You clicked {email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
