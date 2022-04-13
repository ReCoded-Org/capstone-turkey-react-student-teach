import React from "react";
import Card from "./Card";
import about from "../assets/images/about.png";
import Divider from "./Divider";

function Mission() {
    return (
        <>
            <div className="container mx-auto px-12 flex flex-row self-start items-stretch items-center">

                {/* first column with h1 and description begins here */}
                <div className="md:container md:mx-auto columns-1">
                    <h1 className="font-bold leading-normal mb-8 text-[#CA7560] text-left text-2xl mt-16">Who We Are</h1>
                    <p className="text-[#424242] font-semibold mb-4 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
                        voluptatibus dolorum explicabo laboriosam consequatur officiis consectetur<br /> repellat velit nulla placeat.<br />
                    </p>
                    <p className="text-[#424242] font-semibold mb-4 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae<br /> voluptatibus dolorum explicabo laboriosam consequatur officiis consectetur<br />repellat velit nulla placeat.<br />
                    </p>
                </div>
                {/* first column with h1 and description ends here */}

                {/* second column with image begins here */}
                <div className="md:container md:mx-auto columns-1">
                    <img src={about} width={770} height={480} alt="hands reaching each other"/>
                </div>
                {/* second column with image ends here */}

            </div>

            {/* team section with header and cards begins here */}
            
            <div className="md:container mx-auto px-12 flex flex-col self-start items-stretch items-center">

                <h1 className="font-bold leading-normal mb-8 text-[#424242] text-center mt-36 columns-1 text-2xl">Team</h1>

                {/* buraya yatay çizgi gelecek */}

                <Divider/>

                <div className="flex flex-row items-center columns-1 m-8">
                    <Card />
                </div>

                <Divider/>

            </div>

            {/* team section with header and cards ends here */}

        </>
    )
}

export default Mission;