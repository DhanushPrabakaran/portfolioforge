"use server"
import { prisma, Project } from '@/utils/prisma';



export async function createProject(formdata) {
  console.log("hey",formdata,formdata.get('title'))
const data ={
  title:formdata.get('title'),
  year: formdata.get('year'),
  link: formdata.get('link'),
  collaborators:formdata.get('collaborators'),
  description: formdata.get('description'),
  email:formdata?.get('email') ||"dhanushprabakaran18@gmail.com",
}
  
  return prisma.project.create({data});

}

// export async function getProjectById(id: string): Promise<Project | null> {
//   return prisma.project.findUnique({ where: { id } });
// }

// export async function updateProject(id: string, data: Partial<Project>): Promise<Project | null> {
//   return prisma.project.update({ where: { id }, data });
// }

// export async function deleteProject(id: string): Promise<void | Error> {
//   try {
//     await prisma.project.delete({ where: { id } });
//     return; // Return void if deletion is successful
//   } catch (error) {
//     return new Error("Failed to delete project"); // Return an Error object if deletion fails
//   }
// }
