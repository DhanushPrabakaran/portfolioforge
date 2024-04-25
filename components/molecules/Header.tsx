import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";
import { auth } from "@/auth";
const Header = async () => {
  const session = await auth();
  return (
    <div className="navbar bg-base-100 flex flex-row justify-between">
      {/* <div className="flex-1"> */}
      <div className="text-2xl font-bold text-gray-800 md:text-3xl">
        <Link href="/">
          portfolio<span className="text-indigo-600">forge</span>
        </Link>
      </div>
      {/* </div> */}
      <div className="flex-none">
        {session ? (
          <>
            {/* <Image
              src={
                session?.user?.image ||
                "https://source.boringavatars.com/beam/120"
              }
              alt={session?.user?.name || ""}
              width={40}
              height={40}
              className=" bg-cover rounded-full"
            /> */}
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src={
                      session?.user?.image ||
                      "https://source.boringavatars.com/beam/120"
                    }
                    alt={session?.user?.name || ""}
                    height={50}
                    width={50}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu flex flex-col align-middle justify-center items-center  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
              >
                <Link 
                // className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"  bg-gray-600 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800
                className=" px-4 py-3 rounded my-1  w-full text-center bg-gray-600 text-gray-200  hover:bg-gray-800" 
                 href="/dashboard">Dashboard</Link> 

                <Link 
                // className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                className=" px-4 py-3 rounded my-1  w-full text-center bg-red-400 text-gray-200  hover:bg-red-600" 
                 href="/auth/signout" >Signout</Link>
              </ul>
            </div>
          </>
        ) : (
          <Button text="Signin" href="/auth/signin" />
        )}
        {/* <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                height={50}
                width={50}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
