import React from "react";

import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className="z-0" id="intro">
            <div className="px-20 text-center py-10">
                <h1 className="pb-10">Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={getImageUrl("Images/logs.jpg")} alt="Garden Clearance" />
                        <div className="m-auto text-center p-4 leading-normal">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Professionally Dried Logs and Kindling</h2>
                            <p className="mb-3 text-black dark:text-white">
                                All of our wood is dried for a minimum of 12 months and tested to ensure it obtains a maximum of 20% moisture.
                            </p>
                        </div>
                    </a>
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={getImageUrl("Images/kindling.jpg")} alt="Garden Clearance" />
                        <div className="m-auto text-center p-4 leading-normal">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hire Fire Pit + Wood</h2>
                            <p className="mb-3 text-black dark:text-white">
                                Going camping and need a fireplace? We've got you covered with our reliable rentable camping pack.
                            </p>
                        </div>
                    </a>
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={getImageUrl("Images/kindling.jpg")} alt="Garden Clearance" />
                        <div className="m-auto text-center p-4 leading-normal">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coal</h2>
                            <p className="mb-3 text-black dark:text-white">
                                stuff <br />
                                stuff <br />
                                stuff <br />
                                stuff <br />
                                stuff <br />
                            </p>
                        </div>
                    </a>
                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={getImageUrl("Images/removal.jpeg")} alt="Garden Clearance" />
                        <div className="m-auto text-center p-4 leading-normal">
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Garden Clearance</h2>
                            <p className="mb-3 text-black dark:text-white">
                                We are fully licensed to remove all garden waste to your requirements, no matter how big or small.
                            </p>
                        </div>
                    </a>
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
