import React from "react";
import about from "../assets/images/about.png";

function Mission() {
    return (
        <>
            <div className=" md:container px-2 py-4 mx-auto grid md:grid-cols-2 lg:flex lg:h-128 lg:py-16 xl:h-128 xl:py-16">
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div className="max-w-lg">
                        <h1 className="text-xl tracking-wide text-[color:var(--primary-color)] lg:text-4xl font-semibold">
                            Who are we?
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                            laudantium quod rem voluptatem eos accusantium cumque.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                            laudantium quod rem voluptatem eos accusantium cumque.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                    <img className="object-cover w-full max-w-2xl rounded-md lg:h-full xs:w-0 xs:h-0" src={about} />
                </div>
            </div>
        </>
    )
}

export default Mission;