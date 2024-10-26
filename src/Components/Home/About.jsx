import React from "react";

import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className="z-0" id="intro">
            <div className="px-20 text-center py-10">
                <h1 className="pb-10">Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                    <div className="max-w-sm rounded-lg overflow-hidden bg-white mx-auto">
                        <img className="w-[96vw] " src={getImageUrl("Images/logs.jpg")} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <h2 className="font-bold mb-2">Professionally Dried Logs and Kindling</h2>
                            <p className="text-black text-base">
                                All of our wood is dried for a minimum of 12 months and tested to ensure it obtains a maximum of 20% moisture.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden bg-white mx-auto">
                        <img className="w-full" src={getImageUrl("Images/kindling.jpg")} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <h2 className="font-bold mb-2">Hire Fire Pit + Wood</h2>
                            <p className="text-black text-base">
                                Going camping and need a fireplace? We've got you covered with our reliable rentable camping pack.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden bg-white mx-auto">
                        <img className="w-full" src={getImageUrl("Images/kindling.jpg")} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <h2 className="font-bold mb-2">Coal</h2>
                            <p className="text-black text-base">
                                stuff <br />
                                stuff <br />
                                stuff <br />
                                stuff <br />
                                stuff <br />
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm rounded-lg overflow-hidden bg-white mx-auto">
                        <img className="w-full" src={getImageUrl("Images/removal.jpeg")} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4 ">
                            <h2 className="font-bold mb-2">Garden Clearance</h2>
                            <p className="text-black text-base">
                                We are fully licensed to remove all garden waste to your requirements, no matter how big or small.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-20 text-center py-10">
                <h1 className="pb-10">Why Choose Us?</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-16">
                    <div className="rounded-lg bg-white mx-auto">
                        <img className="w-[50-vw] mx-auto mt-4" src={getImageUrl("Icons/family.png")} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4 ">
                            <h2 className="font-bold mb-2">Family Run Business</h2>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white mx-auto">
                        <img className="w-[50-vw] mx-auto mt-4" src={getImageUrl("Icons/guarantee.png")} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4 ">
                            <h2 className="font-bold mb-2">Money Back Guarantee</h2>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white mx-auto">
                        <img className="w-[50-vw] mx-auto mt-4" src={getImageUrl("Icons/delivery.png")} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4 ">
                            <h2 className="font-bold mb-2">Local Delivery</h2>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white mx-auto">
                        {/* <img className="w-[50-vw] mx-auto mt-4" src={getImageUrl("Icons/delivery.png")} alt="Sunset in the mountains"/> */}
                        <div className="px-6 py-4 ">
                            <h2 className="font-bold mb-2">???????</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
