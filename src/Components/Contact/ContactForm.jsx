import React from "react";
import { useLocation } from "react-router-dom";

import { getImageUrl } from "../../utils";

export const ContactForm = () => {

    const location = useLocation();
    const data = location.state;

    console.log(data)
    return (
        <section className="z-0" id="intro">
            <div className="grid grid-cols-1 sm:grid-cols-2 px-20 text-center py-20 gap-16">
                <div className=" bg-slate-400 p-6 rounded-lg">
                    <p>{ useLocation().state }</p>
                </div>

            </div>
        </section>
    );
};
