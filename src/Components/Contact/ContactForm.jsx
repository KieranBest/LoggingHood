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

    return (
        <section className="z-0" id="intro">
            <div className="flex flex-col items-center justify-center mt-8 mb-4 py-24">
                <form ref={form} onSubmit={checkValidation} className=" w-10/12 max-w-xl">
                    <div className="sm:flex sm:items-center mb-6">
                        <select
                            value={emailRecipient}
                            onChange={e => setRecipient(e.target.value)}
                        >
                            {contacts.map(contacts => (
                                
                                    <option key={contacts.id} value={contacts.id}>
                                        {contacts.title}
                                    </option>
                                
                            ))}
                        </select>
                        <p>{emailRecipient}</p>
                    </div>
                    <div className="sm:flex sm:items-center mb-6">
                        <div className="w-full">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black text-center text-md"
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
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black text-center text-md"
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
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black resize-none text-center text-md"
                                name="message"
                                id="message"
                                autoComplete='off'
                                placeholder='What would you like to say?'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <input className="content-center shadow bg-slate-600 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white text-md font-bold py-2 px-4 rounded"
                                type="submit"
                                value="Send" 
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

