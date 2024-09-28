import React from "react";

import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <section className="z-0" id="intro">
            <div className="grid grid-cols-1 px-4">
                <img className="object-cover object-top w-full h-[44vh] max-w-full rounded-lg" src={getImageUrl("1.jpeg")} alt="Ashton Phillips 21" loading=" lazy" />
            </div>
            <div className='absolute text-2xl sm:text-3xl md:text-5xl lg:text-7xl justify-center top-1/2 pt-20 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-red-600 text-center text-8xl'>LoggingHood</h1>
            </div>
        </section>
    );
}