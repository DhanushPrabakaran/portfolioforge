import { NextResponse } from 'next/server'
import { createProject,getProjectById, updateProject, deleteProject } from '@/app/api/project/code';

type Params = {
  id: string
}

 
export async function GET(request: Request,context: { params: Params }) {
  
  let res=context.params.id;
  console.log("hai post",res);
  const response =
  await getProjectById(res);

console.log("hai")
  return NextResponse.json(
    {data:response}
  )
}


export async function POST(request: Request) {
  let res=await request.json();
  console.log("hai post",res);
  const respo = await createProject(res);
  console.log(respo);
    
   
    return new Response('Success!', {
      status: 200,
    })
  }

// import { createUser, getUserById, updateUser, deleteUser } from '@/app/api/profile/code';
// import { createProject, getProjectById, updateProject, deleteProject } from '@/app/api/project/code';
// import { createExperience, getExperienceById, updateExperience, deleteExperience } from '@/app/api/experience/code';

// // Usage examples
// createProject({
//     title: 'New Project', description: 'Description of the new project',
//     collaborators: null,
//     link: '',
//     year: 0,
//     image: null,
//     Client: null,
//     userId: null
// });

// createExperience({
//     from: 'January 2022', end: 'Present', Title: 'Software Engineer',
//     userId: null,
//     coworkers: null,
//     location: null,
//     url: null,
//     Company: null,
//     Description: null
// });

// // createUser({
// //     email: 'example@example.com', name: 'John Doe', role: 'Developer',
// //     image: '',
// //     Dname: null,
// //     website: '',
// //     about: ''
// // });


// getProjectById('project-id');
// getExperienceById('experience-id');
// getUserById('user-id');


// updateProject('project-id', { title: 'Updated Title' /* other fields */ });
// updateExperience('experience-id', { Title: 'Updated Title' /* other fields */ });
// updateUser('user-id', { name: 'Updated Name' /* other fields */ });

// deleteProject('project-id');
// deleteExperience('experience-id');
// deleteUser('user-id');