"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useSession } from "next-auth/react";
// import auth from "@/auth"
// import { createUser, getUserByEmail } from "../api/profile/code";
interface FormValues {
  name: string;
  Dname: string;
  role: string;
  website: string;
  about: string;
  email: string;
  image: string;
}

const Page: React.FC = () => {

  const [session, setSession] = useState(useSession());
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    Dname: "",
    role: "",
    website: "",
    about: "",
    email: session?.data?.user?.email || "",
    image: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/profile/${session?.data?.user?.email}`);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await res.json();
        setData(jsonData);
        setFormData(jsonData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [session]);

  useEffect(() => {
    console.log(session);
  }, [session]);

  


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Handle success response
      console.log("Form submitted successfully");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
      {JSON.stringify(data)}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            What is your name?
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label
            htmlFor="Dname"
            className="block text-sm font-medium text-gray-700"
          >
            Display name*
          </label>
          <input
            type="text"
            name="Dname"
            id="Dname"
            value={formData.Dname}
            onChange={handleChange}
            placeholder="Tech Doe"
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            What do you do?
          </label>
          <input
            type="text"
            name="role"
            id="role"
            required
            placeholder="Full Stack Developer"
            value={formData.role}
            onChange={handleChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        {/* <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            required
            placeholder="D.No.71A,Brookside,AL,United States,United States"
            value={formData.location}
            onChange={handleChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div> */}
        {/* <div>
          <label
            htmlFor="pronouns"
            className="block text-sm font-medium text-gray-700"
          >
            Pronouns
          </label>
          <input
            type="text"
            name="pronouns"
            id="pronouns"
            value={formData.pronouns}
            onChange={handleChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div> */}
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <input
            required
            type="url"
            name="website"
            id="website"
            placeholder="https://example.com"
            value={formData.website}
            onChange={handleChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About
          </label>
          <textarea
            name="about"
            id="about"
            value={formData.about}
            onChange={handleChange}
            className="textarea textarea-bordered w-full my-2"
            placeholder="Bio"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
