import React from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
    return (
        <div className="hero min-h-screen  bg-black">
            <div className=" text-center ">
                {/* <div className=""> */}
                    <h1 className="text-3xl text-neutral-100 lg:text-5xl shadow-inner  font-bold my-4">PROJECTS</h1>

                    <div className="rounded-box  ">
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        
                        {/* <div className="group  relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ">
                            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 rounded-lg"></span>

                            <span className=" card w-72 relative block  border-current  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                                <Image
                                    className="rounded-t-lg  h-[200px] opacity-30"
                                    src={iam}
                                    alt=""
                                />

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise technology acquisitions of
                                        2021 so far, in reverse chronological order.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Read more
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                {/* </div> */}
                            {/* </span> */}
                        {/* </div> */} 
                        {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                            <a href="#">
                                <Image className="rounded-t-lg  h-[200px]" src={iam} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div> */}
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Projects;