import { prisma } from '@/utils/prisma';


// Create operation examples

async function createProject() {
  const newProject = await prisma.project.create({
    data: {
      title: 'New Project',
      description: 'Description of the new project',
      link: 'https://example.com/new-project',
      year: 2024,
      // Add other fields as needed
    },
  });
  console.log('Created project:', newProject);
}

async function createExperience() {
  const newExperience = await prisma.experience.create({
    data: {
      from: 'January 2022',
      end: 'Present',
      Title: 'Software Engineer',
    },
  });
  console.log('Created experience:', newExperience);
}

async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      email: 'example@example.com',
      name: 'John Doe',
      role: 'Developer',
      image: 'https://example.com/avatar.jpg',
      website: 'https://example.com',
      about: 'About John Doe',
      
    },
  });
  console.log('Created user:', newUser);
}



async function getProjectById(id: string) {
  const project = await prisma.project.findUnique({
    where: { id },
  });
  console.log('Project:', project);
}

async function getExperienceById(id: string) {
  const experience = await prisma.experience.findUnique({
    where: { id },
  });
  console.log('Experience:', experience);
}

async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      projects: true,
      experience: true,
    },
  });
  console.log('User:', user);
}



async function updateProject(id: string) {
  const updatedProject = await prisma.project.update({
    where: { id },
    data: {
      title: 'Updated Title',
     
    },
  });
  console.log('Updated project:', updatedProject);
}

async function updateExperience(id: string) {
  const updatedExperience = await prisma.experience.update({
    where: { id },
    data: {
      Title: 'Updated Title',
      // Add other fields to update
    },
  });
  console.log('Updated experience:', updatedExperience);
}

async function updateUser(id: string) {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      name: 'Updated Name',
      // Add other fields to update
    },
  });
  console.log('Updated user:', updatedUser);
}

// Delete operation examples

async function deleteProject(id: string) {
  const deletedProject = await prisma.project.delete({
    where: { id },
  });
  console.log('Deleted project:', deletedProject);
}

async function deleteExperience(id: string) {
  const deletedExperience = await prisma.experience.delete({
    where: { id },
  });
  console.log('Deleted experience:', deletedExperience);
}

async function deleteUser(id: string) {
  const deletedUser = await prisma.user.delete({
    where: { id },
  });
  console.log('Deleted user:', deletedUser);
}

createProject();
createExperience();
createUser();
getProjectById('project-id');
getExperienceById('experience-id');
getUserById('user-id');
updateProject('project-id');
updateExperience('experience-id');
updateUser('user-id');
deleteProject('project-id');
deleteExperience('experience-id');
deleteUser('user-id');

