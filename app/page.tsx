"use client";
import Link from "next/link";
// import { useSession } from "next-auth/react";
const Page = () => {
  // const session = useSession();
  return (
    <div className="h-full max-w-screen w-full flex items-center justify-center bg-base-100 text-base-content select-none">
      <div className="w-full">
        <div className="flex bg-white" style={{ height: "600px" }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Instant Portfolio:{" "}
                <span className="text-indigo-600">Simplified for Success</span>
              </h2>
              <p className="mt-2 text-md text-gray-500 md:text-base">
              {/* {JSON.stringify(session, null, 2)} */}
                Unlock your potential with our user-friendly portfolio builder.
                Perfect for students and professionals alike, our tool makes
                portfolio creation a breeze. With just a few clicks, transform
                your details into a stunning showcase of your skills. Start
                impressing today.
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  className="px-4 py-3 bg-gray-600 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div
              className="h-full object-cover "
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
              }}
            >
              <div className="h-full bg-gray-100 opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
