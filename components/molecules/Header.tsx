"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";
import { useSession } from "next-auth/react";

const Header =  () => {
  const session = useSession();
  return (
    <div className="navbar bg-base-100 flex flex-row justify-between">
      <div className="text-2xl font-bold text-gray-800 md:text-3xl">
        <Link href="/">
          portfolio<span className="text-indigo-600">forge</span>
        </Link>
      </div>
      <div className="flex-none">
        {session ? (
          <>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    src={
                      session?.data?.user?.image ||
                      "https://source.boringavatars.com/beam/120"
                    }
                    alt={session?.data?.user?.name || ""}
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
                  className=" px-4 py-3 rounded my-1  w-full text-center bg-gray-600 text-gray-200  hover:bg-gray-800"
                  href="/dashboard"
                >
                  Dashboard
                </Link>

                <Link
                  className=" px-4 py-3 rounded my-1  w-full text-center bg-red-400 text-gray-200  hover:bg-red-600"
                  href="/auth/signout"
                >
                  Signout
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <Button text="Signin" href="/auth/signin" />
        )}
      </div>
    </div>
  );
};
export default Header;
