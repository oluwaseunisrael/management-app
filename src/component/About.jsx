import React from "react";
import profilepic from "../assets/img/2.png";

function About() {
    return (
        <>
            <div className="p-12 border border-white rounded-lg shadow-sm max-[740px]:p-4">
                
                <div className="grid grid-cols-2 gap-10 items-center max-[740px]:grid-cols-1">
                    
                    {/* Image */}
                    <div>
                        <img
                            src={profilepic}
                            alt="Profile"
                            className="h-[500px] w-full object-cover rounded-lg max-[740px]:h-auto"
                        />
                    </div>

                    {/* About Text */}
                    <div>
                        <p className="text-sm mt-2">
                            About Me
                        </p>

                        <h1 className="text-4xl font-bold max-[740px]:text-3xl">
                            A bit about
                            <br />
                            who I am
                        </h1>

                        <p className="text-xl my-4 max-[740px]:text-sm">
                            I'm Eliott, a freelance designer and frontend
                            developer based in Paris with 5 years of experience
                            shipping digital products for startups, agencies,
                            and scale-ups across Europe. I thrive at the
                            intersection of great design and clean code.

                            I believe great interfaces are invisible — they get
                            out of the user's way. My work is fast, accessible
                            and built to last. When I'm not coding, you'll find
                            me hiking or hunting for a good espresso.
                        </p>

                        {/* Skills */}
                        <div className="flex gap-4 items-center flex-wrap">
                            <span className="bg-blue-800 text-white cursor-pointer px-8 py-2 rounded-sm hover:bg-blue-600 max-[740px]:px-4">
                                HTML:5
                            </span>

                            <span className="bg-blue-800 text-white cursor-pointer px-8 py-2 rounded-sm hover:bg-blue-600 max-[740px]:px-4">
                                CSS:3
                            </span>

                            <span className="bg-blue-800 text-white cursor-pointer px-8 py-2 rounded-sm hover:bg-blue-600 max-[740px]:px-4">
                                JavaScript
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;