import React from "react";

import { Intro } from "../Components/Contact/Intro";
import { ContactForm } from "../Components/Contact/ContactForm"

export const Contact = () => {
    return (
        <section className="min-h-[84vh] z-0">
            < Intro />
            < ContactForm />
        </section>
    )
};