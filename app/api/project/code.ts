import { prisma, Project } from '@/utils/prisma';



export async function createProject(data: Omit<Project, 'id'>): Promise<Project> {
  return prisma.project.create({ data });
}

export async function getProjectById(id: string): Promise<Project | null> {
  return prisma.project.findUnique({ where: { id } });
}

export async function updateProject(id: string, data: Partial<Project>): Promise<Project | null> {
  return prisma.project.update({ where: { id }, data });
}

export async function deleteProject(id: string): Promise<void | Error> {
  try {
    await prisma.project.delete({ where: { id } });
    return; // Return void if deletion is successful
  } catch (error) {
    return new Error("Failed to delete project"); // Return an Error object if deletion fails
  }
}
