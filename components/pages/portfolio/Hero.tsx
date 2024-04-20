import React from 'react'
import Image from 'next/image'
import iam from "@/public/laptop.webp"
import theme from "@/public/theme.svg"
import linkden from "@/public/icon/linkden.svg";
import github from "@/public/icon/github.svg";
import medium from "@/public/icon/medium.svg";
import Spotify from "@/public/icon/spotify.svg";
import Dribble from "@/public/icon/dribbl.svg";
import Twitter from "@/public/icon/Twitter.svg";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-black pt-24">
      <div className="  flex flex-col w-full h-fit lg:flex-row">


        <div className=" flex  items-center justify-center  flex-col ">
          <div
            className="text-5xl max-sm:text-4xl max-md:text-5xl  my-2 text-center"
          >
            DHANUSH PRABAKARAN
          </div>
          <p

            className=" max-md:text-xl max-md:items-center text-center  text-primary bg-gradient-to-r from-gray-700 via-gray-900 to-black text-2xl bg-clip-text mb-2"
          >
            Full Stack Developer, UI/UX Desiger
          </p>
          <div

            className=" divider text-primary-focus w-fit h-fit flex justify-center  align-middle  my-2 "
          >
            <a
              href="https://www.linkedin.com/in/dhanushprabakar/"
              className="flex"
            >
              <Image
                src={linkden}
                width={30}
                className=" w-24 mr-2"
                alt={""}
              />
            </a>
            <a
              href="https://medium.com/@dhanushprabakaran18"
              className="flex "
            >
              <Image src={medium} width={30} className="mr-2 w-24" alt={""} />
            </a>
            <a href="https://github.com/DhanushPrabakaran" className="flex ">
              <Image
                src={github}
                width={40}
                className="mr-2 w-32 fill-primary-focus"
                alt={""}
              />
            </a>
            <a
              href="https://open.spotify.com/user/3xn4a5w7pqbo94ztkvjlt2m7d"
              className="flex "
            >
              <Image
                src={Spotify}
                width={30}
                className="mr-2 w-24 fill-primary-focus"
                alt={""}
              />
            </a>
            <a href="https://dribbble.com/dhanu_sh" className="flex ">
              <Image
                src={Dribble}
                width={30}
                className="mr-2 w-24 fill-primary-focus"
                alt={""}
              />
            </a>
            <a href="https://twitter.com/sudha_dhanush" className="flex ">
              <Image
                src={Twitter}
                width={30}
                className="mr-2 w-24 fill-primary-focus"
                alt={""}
              />
            </a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1UiKnvQHZbSFiVJeC8A2hCS85GK7NTnuQ/view?usp=share_link" target="_blank" rel="noopener noreferrer"
            
              className="btn btn-primary hover:text-black ease-in-out duration-500 w-fit my-2"
            >
              Download Resume
            </a>
          </div>

        </div>
        <div
        className='w-full h-full flex justify-center items-center'>
          
        <svg viewBox="0 0 655 680" fill="none" className=" p-2 max-h-[500px] ">
          <g clip-path="url(#:S1:-clip)" className="group">
            <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105 ">
              <foreignObject width="655" height="680" className='bg-black' >
                <Image alt="" loading="lazy" width="2400" height="3000" decoding="async" data-nimg="1" className="w-full object-cover  opacity-40" sizes="(min-width: 1024px) 41rem, 31rem" src={iam} />
              </foreignObject>
            </g>
            <use href="#:S1:-shape" stroke-width="2" className="stroke-neutral-950/10">
            </use>
          </g>
          <defs>
            <clipPath id=":S1:-clip"><path id=":S1:-shape" d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z" fill-rule="evenodd" clip-rule="evenodd">
            </path>
            </clipPath>
          </defs>
        </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero