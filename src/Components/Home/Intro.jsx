import React from "react";

import { getImageUrl } from "../../utils";

export const Intro = () => {
    return (
        <section className="z-50" id="intro">
            <div className="w-full h-[60vh] py-4 relative overflow-hidden ">
                <img className="w-full h-full object-cover object-center absolute" src={getImageUrl("background.jpeg")} alt="Home Background" loading=" lazy" />
            </div>
            <div className='absolute justify-center top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img className="" src={getImageUrl("logo.png")} alt="Home Background" loading=" lazy" />
            </div>
        </section>
    );
};
