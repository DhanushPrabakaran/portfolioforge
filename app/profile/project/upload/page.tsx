"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormValues {
  username: string;
  displayName: string;
  occupation: string;
  location: string;
  pronouns: string;
  website: string;
  about: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    username: '',
    displayName: '',
    occupation: '',
    location: '',
    pronouns: '',
    website: '',
    about: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Handle success response
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            What is your name?
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label
            htmlFor="displayName"
            className="block text-sm font-medium text-gray-700"
          >
            Display name *
          </label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label
            htmlFor="occupation"
            className="block text-sm font-medium text-gray-700"
          >
            What do you do?
          </label>
          <input
            type="text"
            name="occupation"
            id="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
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
            value={formData.location}
            onChange={handleChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
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
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <input
            type="url"
            name="website"
            id="website"
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
          <textarea name="about"
            id="about"
            value={formData.about}
            onChange={handleChange}
             className="textarea textarea-bordered w-full my-2" placeholder="Bio"></textarea>
        </div>
        <button
          type="submit"
          className='btn'
          // className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
