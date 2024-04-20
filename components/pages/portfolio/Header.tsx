import React from "react";
import Spotify from "@/public/icon/spotify.svg";
import Image from "next/image";
const Header = () => {
  return (
    <div className="navbar bg-gradient-to-b from-[#000000c8] via-[#2a2a2a56] to-[#1212122f]  border-b border-opacity-10 border-b-[#776fff] shadow-inner sha bg-transparent z-50   fixed text-[#776fff] text-xl uppercase backdrop-blur-sm">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-black bg-opacity-90 rounded-box w-52 z-10 "
          >
            <li>
              <a href="#Home"
              className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Home</a>
            </li>
            <li>
              <a href="#About"
              className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">About me!</a>
            </li>

            <li>
              <a href="#Project"
              className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Project</a>
              <ul className="p-2">
                <li>
                  <a href="#Project1"
                  className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Project-1</a>
                </li>
                <li>
                  <a href="#Project2"
                  className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Project-2</a>
                </li>
              </ul>
            </li>
            
            <li>
              <a href="#Achievements"
              className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Achievements</a>
            </li>
            {/* <li>
            <a href="#Writing" className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Brain Waves</a>
          </li> */}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl  from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent ">D-Dev</a>
      </div>
      <div className="navbar-center hidden items-stretch lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a
              href="#Home"
              className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#About"
            className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">About me!</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary
              className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus flex-1">Project</summary>
              <ul className="p-2 bg-black bg-opacity-90">
                <li
                className="">
                  <a href="#Project1"
                  className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Project-1</a>
                </li>
                <li>
                  <a href="#Project2" className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Project-2</a>
                </li>
              </ul>
            </details>
          </li>
          
          <li>
            <a href="#Achievements" className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Achievements</a>
          </li>
          {/* <li>
            <a href="#Writing" className=" hover:border-x-2 border-[#776fff] hover:text-primary-focus">Brain Waves</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">


<a
  className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600  text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="/"
>
  {/* <span className="absolute -end-full transition-all group-hover:end-4">
 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#B2EBF2" d="M22.828 8.963a11.254 11.254 0 0 0-7.078-7.566A11.055 11.055 0 0 0 12 .75a11.03 11.03 0 0 0-3.534.572C3.984 2.803.75 7.031.75 12a11.1 11.1 0 0 0 .825 4.219C3.244 20.344 7.284 23.25 12 23.25c.544 0 1.078-.038 1.603-.112 4.978-.713 8.916-4.697 9.553-9.694.066-.478.094-.956.094-1.444 0-1.05-.141-2.072-.422-3.037z"/><path fill="#4DD0E1" d="M11.56 5.78v1.05a3.89 3.89 0 0 1-3.08 3.83c-.69.13-1.29.5-1.77 1.07-.43.52-.67 1.2-.68 1.89-.01.77-.32 1.5-.85 2.03-.56.55-1.29.85-2.06.85H1.71c-.62-1.38-.96-2.91-.96-4.51 0-5.15 3.5-9.49 8.27-10.79l.21.16c1.46 1 2.33 2.66 2.33 4.42z"/><path fill="#00BCD4" d="m22.8 8.85-2.98.36a3.59 3.59 0 0 1-3.53-1.71 7.15 7.15 0 0 1-.6-6.08c3.42 1.18 6.09 3.95 7.11 7.43z"/><path fill="#CFD8DC" d="M22 15.375c-.758 0-1.375-.617-1.375-1.375s.617-1.375 1.375-1.375 1.375.617 1.375 1.375-.617 1.375-1.375 1.375zM22 23.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM15 19.29c-.711 0-1.29-.579-1.29-1.29s.579-1.29 1.29-1.29 1.29.579 1.29 1.29-.579 1.29-1.29 1.29z"/><path d="M11.998 24C5.382 24 0 18.617 0 12S5.382 0 11.998 0c5.669 0 10.613 4.028 11.757 9.579a.75.75 0 1 1-1.469.303C21.285 5.025 16.958 1.5 11.998 1.5 6.209 1.5 1.5 6.21 1.5 12s4.709 10.5 10.498 10.5c1.512 0 2.974-.316 4.345-.94a.75.75 0 0 1 .621 1.365A11.898 11.898 0 0 1 11.998 24z"/><path d="M3.12 17.25H1.69a.75.75 0 0 1 0-1.5h1.43a2.17 2.17 0 0 0 1.525-.625c.4-.401.628-.94.635-1.514a3.82 3.82 0 0 1 .858-2.374 3.86 3.86 0 0 1 2.176-1.313 3.148 3.148 0 0 0 2.497-3.095V5.78a4.66 4.66 0 0 0-2.247-3.968.748.748 0 0 1-.256-1.029.749.749 0 0 1 1.03-.256 6.168 6.168 0 0 1 2.973 5.253v1.05a4.639 4.639 0 0 1-3.692 4.563 2.344 2.344 0 0 0-1.326.801c-.324.4-.505.901-.513 1.437a3.67 3.67 0 0 1-1.079 2.56A3.665 3.665 0 0 1 3.12 17.25zM13.15 23.94a.749.749 0 0 1-.584-.278l-1.94-2.4a5.493 5.493 0 0 1 .37-7.319.75.75 0 0 1 1.068 1.055 3.993 3.993 0 0 0-.271 5.321l1.94 2.4a.75.75 0 0 1-.583 1.221zM19.38 9.99a4.332 4.332 0 0 1-3.731-2.111 7.9 7.9 0 0 1-.654-6.763.75.75 0 1 1 1.411.508 6.404 6.404 0 0 0 .527 5.48c.585.966 1.672 1.513 2.795 1.362l2.981-.361a.75.75 0 1 1 .181 1.488l-2.97.36a3.663 3.663 0 0 1-.54.037zM22 16c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 22 13.5zM22 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 22 21.5z"/><path d="M15 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 15 17.5z"/><path d="M20.709 22.01a.735.735 0 0 1-.371-.099l-4.42-2.52a.749.749 0 1 1 .743-1.302l4.42 2.52a.749.749 0 0 1-.372 1.401z"/><path d="M16.291 18.01a.75.75 0 0 1-.372-1.401l4.42-2.52a.75.75 0 0 1 .743 1.302l-4.42 2.52a.738.738 0 0 1-.371.099z"/></svg>
  </span> */}

  <span className=" text-sm p-2 ">
    Get Connected
  </span>
</a>
      </div>
    </div>
  );
};

export default Header;