import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from '@emailjs/browser';
import swal from "sweetalert2";

import contacts from "../../Data/Contacts.json"

export const ContactForm = () => {

    const location = useLocation();
    const data = location.state;
    const form = useRef();

    // console.log(data)
    //{ useLocation().state }

    const checkValidation = (e) => {
        e.preventDefault();
        if (form.current.name.value === "") {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Name is required!",
            });
            return false;
        } else if (form.current.email.value === "") {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email is required!",
            });
            return false;
        } else if (form.current.message.value === "") {
            swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Message is required!",
            });
            return false;
        } else {
            sendEmail();
            form.current.reset();
            swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Message is required!",
            });
            return true;
        }
    }

    const sendEmail = () => {
        emailjs
        .sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID, 
            // import.meta.env.VITE_EMAIL_TEMPLATE_ID, 

            form.current, 
            import.meta.env.VITE_EMAIL_USER_KEY,
        )
        .then(
            () => {
            console.log('Message Sent');
            },
            (error) => {
            console.log('Sending Failed', error.text);
            },
        );
    };

    const [emailRecipient, setRecipient] = useState(data);
    if (emailRecipient == null) setRecipient(0);

    return (
        <section className="z-0" id="intro">
            <div className="flex flex-col items-center justify-center mt-8 mb-4 py-24">
                <form ref={form} onSubmit={checkValidation} className=" w-10/12 max-w-xl">
                    <div className="sm:flex sm:items-center mb-6">
                        
                        <div className="w-full"> 
                            <label className="block mb-1 text-md text-gray-700 text-center ">
                                Who Would You Like to Contact?
                            </label>
                            <div className="relative">
                                <select
                                    value={emailRecipient}
                                    onChange={e => setRecipient(e.target.value)}
                                    className="w-full bg-gray-100 border-2 border-gray-100 rounded py-2 px-4 placeholder:text-gray-700 text-gray-700  transition duration-300 ease focus:outline-none focus:border-gray-700 appearance-none cursor-pointer"
                                >
                                    {contacts.map(contacts => (
                                        <option key={contacts.id} value={contacts.id} className=" text-center">
                                            {contacts.title}
                                        </option>
                                    ))}
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center mb-6">
                        <div className="w-full">
                            <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black text-center text-md"
                                type="text" 
                                name="name"
                                id="name"
                                autoComplete="given-name"
                                placeholder='What would you like to be called?'
                            />
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center mb-6">
                    <div className="w-full">
                            <input className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black text-center text-md"
                                type="email" 
                                name="email" 
                                id="email"
                                autoComplete="email"
                                placeholder='What email would you like to be contacted on?'
                            />
                        </div>
                    </div>
                    <div className="sm:flex sm:items-center mb-6">
                        <div className="w-full">
                            <textarea className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black resize-none text-center text-md"
                                name="message"
                                id="message"
                                autoComplete='off'
                                placeholder='What would you like to say?'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <button 
                                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-slate-600" >
                                Send
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

