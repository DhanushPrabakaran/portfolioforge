// atom.ts


import { Experience, Message, Project } from "@/types/global";



export const sampleUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  role: "Developer",
  image: "https://example.com/avatar.jpg",
  website: "https://example.com",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.",
};

export const sampleProjects: Project[] = [
  { id: "1", title: "Project 1", description: "Description of Project 1" },
  { id: "2", title: "Project 2", description: "Description of Project 2" },
  { id: "3", title: "Project 3", description: "Description of Project 3" },
];
export const sampleMessages: Message[] = [
  {
    id: "1",
    sender: "John Doe",
    content: "Hey there! How are you?",
    timestamp: new Date("2024-04-25T08:30:00"),
  },
  {
    id: "2",
    sender: "Alice Smith",
    content: "Hi! I'm doing well, thanks. How about you?",
    timestamp: new Date("2024-04-25T08:32:00"),
  },
  {
    id: "3",
    sender: "John Doe",
    content: "I'm good too. Just working on some projects.",
    timestamp: new Date("2024-04-25T08:35:00"),
  }
];
// =======
// import { Project, Experience,Message } from '@/types';

// export const sampleUser = {
//   id: '1',
//   name: 'John Doe',
//   email: 'john@example.com',
//   role: 'Developer',
//   image: 'https://example.com/avatar.jpg',
//   website: 'https://example.com',
//   about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.',
// };

// export const sampleProjects: Project[] = [
//   { id: '1', title: 'Project 1', description: 'Description of Project 1' },
//   { id: '2', title: 'Project 2', description: 'Description of Project 2' },
//   { id: '3', title: 'Project 3', description: 'Description of Project 3' },
// ];
// export const sampleMessages: Message[] = [
//   {
//     id: '1',
//     sender: 'John Doe',
//     content: 'Hey there! How are you?',
//     timestamp: new Date('2024-04-25T08:30:00'),
//   },
//   {
//     id: '2',
//     sender: 'Alice Smith',
//     content: 'Hi! I\'m doing well, thanks. How about you?',
//     timestamp: new Date('2024-04-25T08:32:00'),
//   },
//   {
//     id: '3',
//     sender: 'John Doe',
//     content: 'I\'m good too. Just working on some projects.',
//     timestamp: new Date('2024-04-25T08:35:00'),
// >>>>>>> 077e25a04b3a851b2e3a5fb2a778f57903c56120
//   },
//   // Add more sample messages as needed
// ];


export const sampleExperiences: Experience[] = [
  {
    id: "1",
    Title: "Software Engineer",
    Description: "Worked as a Software Engineer at ABC Inc.",
  },
  {
    id: "2",
    Title: "Frontend Developer",
    Description: "Worked as a Frontend Developer at XYZ Corp.",
  },
  {
    id: "3",
    Title: "Frontend Developer",
    Description: "Worked as a Frontend Developer at XYZ Corp.",
  },
];


// export const sampleExperiences: Experience[] = [
//   { id: '1', Title: 'Software Engineer', Description: 'Worked as a Software Engineer at ABC Inc.' },
//   { id: '2', Title: 'Frontend Developer', Description: 'Worked as a Frontend Developer at XYZ Corp.' },
// ];
// sampleUser.ts

// export const sampleUser = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   role: "Developer",
//   // Add more user details if needed
// };

