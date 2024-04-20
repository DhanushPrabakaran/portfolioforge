import React from 'react'
import Image from "next/image";
import iam from "@/public/laptop.webp";
const ProjectCard = () => {
  return (
    <div className="group m-1 border-dashed    carousel-item  relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ">
      
      
                            <span className="  absolute block inset-0  bg-[#776fff] border-[#776fff]  border-2 rounded-lg border-dashed"></span>

                            <span className=" card w-72  relative  border-current transition-transform translate-x-0 translate-y-0  max-w-sm bg-white border border-gray-200 group-hover:-translate-y-1.5 group-hover:-translate-x-1.5 rounded-lg shadow dark:bg-black dark:border-gray-700">
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
  className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="/download"
>
  <span className="absolute -end-full transition-all group-hover:end-4">
    <svg
      className="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <span className="text-sm font-medium transition-all group-hover:me-4">
    Download
  </span>
</a>
                                </div>
                                {/* </div> */}
                            </span>
                        </div>
  )
}

export default ProjectCard