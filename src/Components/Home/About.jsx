import React from "react";

import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className="z-0" id="intro">
            <div className="grid grid-cols-1 sm:grid-cols-2 px-20 text-center py-20 gap-16">
                <div className=" bg-slate-400 p-6 rounded-lg">
                    <h1>Family Run</h1>
                </div>
                <div className="bg-slate-400 p-6 rounded-lg">
                    <h1>Quality Wood</h1>
                </div>
                <div className="bg-slate-400 p-6 rounded-lg">
                    <img src={getImageUrl("logs.jpg")} alt="placeholder" className="mx-auto rounded-lg" />
                </div>
                <div className="bg-slate-400 p-6 rounded-lg">
                    <img src={getImageUrl("kindling.jpg")} alt="placeholder" className="mx-auto rounded-lg" />
                </div>
                <div className="bg-slate-400 p-6 rounded-lg">
                    <h1>Professionally Dried</h1>
                </div>
                <div className="bg-slate-400 p-6 rounded-lg">
                    <h1>Logs and Kindling</h1>
                </div>
            </div>
        </section>
    );
};
