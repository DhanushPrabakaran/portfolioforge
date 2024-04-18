"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';


interface WorkExperienceFormValues {
  fromDate: string;
  toDate: string;
  title: string;
  company: string;
  location: string;
  url: string;
  coworkers: string;
  description: string;
}

const Page: React.FC = () => {
  const [workExperienceFormData, setWorkExperienceFormData] = useState<WorkExperienceFormValues>({
    fromDate: '',
    toDate: '',
    title: '',
    company: '',
    location: '',
    url: '',
    coworkers: '',
    description: '',
  });

  const handleWorkExperienceChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWorkExperienceFormData({
      ...workExperienceFormData,
      [name]: value,
    });
  };

  const handleWorkExperienceSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workExperienceFormData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit work experience form');
      }

      // Handle success response
      console.log('Work experience form submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting work experience form:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg my-8 ">
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      <form onSubmit={handleWorkExperienceSubmit} className="space-y-4">
        <div>
          <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
            From*
          </label>
          <input
            type="text"
            name="fromDate"
            id="fromDate"
            value={workExperienceFormData.fromDate}
            onChange={handleWorkExperienceChange}
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
            To *
          </label>
          <input
            type="text"
            name="toDate"
            id="toDate"
            value={workExperienceFormData.toDate}
            onChange={handleWorkExperienceChange}
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={workExperienceFormData.title}
            onChange={handleWorkExperienceChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company *
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={workExperienceFormData.company}
            onChange={handleWorkExperienceChange}
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={workExperienceFormData.location}
            onChange={handleWorkExperienceChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            URL
          </label>
          <input
            type="url"
            name="url"
            id="url"
            value={workExperienceFormData.url}
            onChange={handleWorkExperienceChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="coworkers" className="block text-sm font-medium text-gray-700">
            Coworkers
          </label>
          <input
            type="text"
            name="coworkers"
            id="coworkers"
            value={workExperienceFormData.coworkers}
            onChange={handleWorkExperienceChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={workExperienceFormData.description}
            onChange={handleWorkExperienceChange}
            className="textarea textarea-bordered w-full my-2"
            placeholder="Add some details"
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
