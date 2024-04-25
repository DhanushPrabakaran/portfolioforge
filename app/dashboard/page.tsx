import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  sampleUser,
  sampleProjects,
  sampleExperiences,
  sampleMessages,
} from "@/components/atoms/sampledata";
import { Project, Experience, Message } from "@/types";
import Link from "next/link";

const Page = () => {
  const user = sampleUser;
  const projects: Project[] = sampleProjects;
  const experiences: Experience[] = sampleExperiences;
  const messages: Message[] = sampleMessages;

  const renderProjects = () => {
    return projects.map((project) => (
      <div
        key={project.id}
        className="bg-white shadow-md  mb-4 flex group flex-wrap max-w-full rounded"
      >
        <div className=" flex items-start flex-col justify-center w-full p-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-500 line-clamp-2">
            {project.description +
              "adjkh iuywleiurylwcity  yiuyi  ryirwy nkuhikeuryciry uiriueyrityriouyoitu oyrowiutyqowuiqy"}
          </p>
          <div className="hidden  group-hover:flex items-center justify-end w-full duration-1000">
            <Link
              className="text-xs bg-gray-200 hover:bg-violet-600 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1"
              href={""}
            >
              update
            </Link>
            <Link
              className=" text-xs bg-gray-200 hover:bg-red-600 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1"
              href={""}
            >
              delete
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const renderExperiences = () => {
    return experiences.map((experience) => (
      <div
        key={experience.id}
        className="bg-white shadow-md  mb-4 flex group flex-wrap max-w-full rounded"
      >
        <div className=" flex items-start flex-col justify-center w-full p-2">
          <h3 className="text-lg font-semibold">{experience.Title}</h3>
          <p className="text-gray-500 line-clamp-2">
            {experience.Description +
              "adjkh iuywleiurylwcity  yiuyi  ryirwy nkuhikeuryciry uiriueyrityriouyoitu oyrowiutyqowuiqy"}
          </p>
          <div className="hidden  group-hover:flex items-center justify-end w-full duration-1000">
            <Link
              className="text-xs bg-gray-200 hover:bg-violet-600 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1"
              href={""}
            >
              update
            </Link>
            <Link
              className=" text-xs bg-gray-200 hover:bg-red-600 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1"
              href={""}
            >
              delete
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <div
        key={message.id}
        className="bg-white shadow-md p-4 mb-4 group rounded"
      >
        <h3 className="text-lg font-semibold">{message.sender}</h3>
        <div>
          <p className="text-gray-500">{message.content}</p>
          <p>{message.timestamp.toLocaleString()}</p>
        </div>
        <div className="hidden  group-hover:flex items-center justify-end w-full duration-1000">
          <Link
            className=" bg-gray-200 hover:bg-red-600 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default m-1"
            href={""}
          >
            delete
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="User Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <section className="bg-white shadow-md rounded-lg mb-4 pb-2">
          <div className="relative h-32 md:h-48 rounded-t-lg overflow-hidden">
            <Image
              src="/Banner.jpeg"
              alt="Profile Background"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-16">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white">
                <Image
                  src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-white"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold">{user.name}</h2>
              <p className="text-gray-600 text-sm md:text-base font-semibold">
                {user.role + " . " + user.email + " . " + user.website}
              </p>
              <p className="text-gray-600 text-sm text-center md:text-base">
                {user.about}
              </p>
            </div>
            <Link
              href={""}
              className="bg-violet-600 text-white px-4 py-2 rounded-md mt-4"
            >
              Edit Profile
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-2 ">
          <section className="bg-white shadow-md p-4 rounded-lg max-h-96 overflow-y-scroll">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            {projects.length > 0 ? renderProjects() : <p>No projects found.</p>}
            <Link
              className="bg-white shadow-md p-4 mb-4 align-middle flex items-center justify-center"
              href={"/project"}
            >
              <svg
                className="w-12 h-12  fill-slate-200  rounded-full text-gray-200 "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="add-new"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"></path>
              </svg>
            </Link>
            {/* Add button or link for adding new projects */}
          </section>

          <section className="bg-white shadow-md p-4 rounded-lg max-h-96 overflow-y-scroll">
            <h2 className="text-xl font-semibold mb-4">Experiences</h2>
            {experiences.length > 0 ? (
              renderExperiences()
            ) : (
              <p>No experiences found.</p>
            )}
            <Link
              className="bg-white shadow-md p-4 mb-4 align-middle flex items-center justify-center"
              href={"/experience"}
            >
              <svg
                className="w-12 h-12  fill-slate-200  rounded-full text-gray-200 "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="add-new"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"></path>
              </svg>
            </Link>
          </section>

          <section className="bg-white shadow-md p-4 rounded-lg flex flex-col justify-between max-h-96">
            <div className="">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-indigo-600">
                  Total Views
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                  from start
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <svg
                    className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-2xl 2xl:text-3xl font-bold">
                      8,141
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-green-600">
                  Total Messages
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                  from start
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <svg
                    className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="message"
                  >
                    <g>
                      <path d="M24 7H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h1v4a1 1 0 0 0 1.61.79L16.77 23H24a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1h-7.57a1 1 0 0 0-.61.21L11 25v-3a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"></path>
                      <path d="M11 14h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2zm10 2H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z"></path>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-2xl 2xl:text-3xl font-bold">217</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl"> */}
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-blue-600">
                  Weekly views
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                  7 days
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <svg
                    className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-2xl 2xl:text-3xl font-bold">54</span>
                    <div className="flex items-center ml-2 mb-1">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        ></path>
                      </svg>
                      <span className="font-bold text-sm text-gray-500 ml-0.5">
                        7%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white shadow-md p-4 rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          {messages.length > 0 ? renderMessages() : <p>No messages found.</p>}
        </section>
      </div>
    </div>
  );
};

export default Page;
