"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ProjectFormValues {
  title: string;
  year: string;
  company: string;
  link: string;
  collaborators: string;
  description: string;
}

const Page: React.FC = () => {
  const [projectFormData, setProjectFormData] = useState<ProjectFormValues>({
    title: '',
    year: '',
    company: '',
    link: '',
    collaborators: '',
    description: '',
  });

  const handleProjectChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProjectFormData({
      ...projectFormData,
      [name]: value,
    });
  };

  const handleProjectSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectFormData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit project form');
      }

      // Handle success response
      console.log('Project form submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting project form:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <form onSubmit={handleProjectSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title *
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={projectFormData.title}
            onChange={handleProjectChange}
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700">
            Year *
          </label>
          <input
            type="text"
            name="year"
            id="year"
            value={projectFormData.year}
            onChange={handleProjectChange}
            required
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company or client
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={projectFormData.company}
            onChange={handleProjectChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">
            Link to project
          </label>
          <input
            type="url"
            name="link"
            id="link"
            value={projectFormData.link}
            onChange={handleProjectChange}
            className="input input-bordered input-sm w-full my-2"
          />
        </div>
        <div>
          <label htmlFor="collaborators" className="block text-sm font-medium text-gray-700">
            Collaborators
          </label>
          <input
            type="text"
            name="collaborators"
            id="collaborators"
            value={projectFormData.collaborators}
            onChange={handleProjectChange}
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
            value={projectFormData.description}
            onChange={handleProjectChange}
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
