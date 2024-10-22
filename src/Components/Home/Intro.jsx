import React from "react";

import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <section className="z-50" id="intro">
            <div className="w-full h-[60vh] py-4 relative overflow-hidden bg-red-600">
                <img className="w-full h-full object-cover object-center absolute top-0" src={getImageUrl("Background/background2.jpeg")} alt="Home Background" loading=" lazy" />
            </div>
            <div className='absolute justify-center top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
                <img className="" src={getImageUrl("Images/logo.png")} alt="Home Background" loading=" lazy" />
            </div>
        </section>
    );
};
