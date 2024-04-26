import React from "react";
import Image from "next/image";
import iam from "@/public/laptop.webp";

import Profile from "@/public/Profile picture.png";
const About = () => {
  return (
    <div className="hero bg-gray-100">
      <div className="hero-overlay bg-opacity-60 bg-gray-100"></div>
      <div className="   flex justify-center items-center flex-col flex-wrap">
        <h1 className="text-3xl text-neutral-100 lg:text-5xl shadow-inner  font-bold  ">
          ABOUT ME !
        </h1>
        <div className="   flex items-center flex-col justify-center  ">
          <div className=" h-fit   card w-full bg-gray-100 ">
            <div className=" flex flex-col lg:flex-row  items-center">
              <div className=" card-body w-full h-full ">
                <svg
                  viewBox="0 0 655 680"
                  fill="none"
                  className="  h-full max-h-[400px] "
                >
                  <g clip-path="url(#:S1:-clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105 ">
                      <foreignObject
                        width="655"
                        height="680"
                        className="bg-gray-100"
                      >
                        <Image
                          alt=""
                          loading="lazy"
                          width="2400"
                          height="3000"
                          decoding="async"
                          data-nimg="1"
                          className="w-full object-cover  opacity-40"
                          sizes="(min-width: 1024px) 41rem, 31rem"
                          src={Profile}
                        />
                      </foreignObject>
                    </g>
                    <use
                      href="#:S1:-shape"
                      strokeWidth="2"
                      className="stroke-neutral-950/10"
                    ></use>
                  </g>
                  <defs>
                    <clipPath id=":S1:-clip">
                      <path
                        id=":S1:-shape"
                        d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className=" max-md:text-center p-1 font-black lg:text-xl">
                As a{" "}
                <span className=" text-primary-focus ">
                  full-stack web developer
                </span>
                , I am well-versed in a wide range of programming languages and
                technologies. Currently, I am pursuing a{" "}
                <span className=" text-primary">
                  B.Tech in Computer Science and Business Systems
                </span>{" "}
                at KIT- Kalaignarkarunanidhi Institute of Technology, where I
                have gained a solid foundation in software engineering
                principles and best practices. I am passionate about
                collaborating with industry professionals to further develop my
                skills and knowledge, and I am excited about the opportunities
                that lie ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
