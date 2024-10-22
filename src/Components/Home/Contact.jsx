import React from "react";

import contacts from "../../Data/Contacts.json"

export const Contact = () => {
    return (
        <section className="z-0" id="intro">
            <div className="px-20 text-center py-10">
                <h1 className="pb-10">Why Choose Us?</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-16">
                    {contacts.map(contacts => (
                        <div key={contacts.id} className="max-w-sm rounded-lg overflow-hidden bg-white mx-auto">
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{contacts.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{contacts.description}</p>
                                <a href="#" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Contact us!
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
