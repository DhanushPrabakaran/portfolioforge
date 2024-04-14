import Home from "@/components/pages/Home";
// import HorizontalScrollBar from "@/components/pages/HorizontalScrollBar";
import Link from "next/link";
// import Header from '@/components/molecules/Header'
// import { auth } from "@/auth";


const page = async () => {
  // const session = await auth();
  return (
    <div>
      <Home/>
      {/* <HorizontalScrollBar /> */}

      <div className="w-full max-w-screen-xl h-screen  bg-zinc-800 text-white bg-transprant bg-blend-overlay  flex-col items-center justify-center align-middle hidden">
      <div className="flex flex-col justify-center align-middle items-center max-w-5xl">
        <button className="text-lg bg-zinc-800 border border-gray-700 text-gray-200 w-fit px-3 rounded-full bg-opacity-75  text-center m-1  ">
          A Travel Documentary 🫧
        </button>
        <div className="text-5xl text-center max-md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-300 m-1">
          An example app built using Next.js 13 server components.
        </div>
        <div className="text-lg md:text-xl lg:text-2xl text-slate-700 text-center max-w-2xl m-1">
          I{"'"}m building a web app with Next.js 13 and open sourcing
          everything. Follow along as we figure this out together.
          <pre>
          {/* {JSON.stringify(session, null, 2)} */}
          </pre>
          
        </div>
        <div className="flex flex-row m-1 p-2 justify-center items-center align-middle ">
          <Link
            href={"/"}
            className="text-xl  px-4 py-2  rounded-full bg-opacity-40 m-4 bg-zinc-800 border border-gray-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default page;
