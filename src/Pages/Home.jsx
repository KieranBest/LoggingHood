import React from "react";

import { Intro } from "../Components/Home/Intro";
import { About } from "../Components/Home/About";
import { Contact } from "../Components/Home/Contact"

export const Home = () => {
    return (
        <section className="min-h-[84vh] bg-black z-0">
            < Intro />
            < About />
            < Contact />
        </section>
    )
};