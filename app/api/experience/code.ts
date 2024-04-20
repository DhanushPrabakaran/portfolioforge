import { prisma, Experience } from '@/utils/prisma';


export async function createExperience(data: Omit<Experience, 'id'>): Promise<Experience> {
  return prisma.experience.create({ data });
}

export async function getExperienceById(id: string): Promise<Experience | null> {
  return prisma.experience.findUnique({ where: { id } });
}

export async function updateExperience(id: string, data: Partial<Experience>): Promise<Experience | null> {
  return prisma.experience.update({ where: { id }, data });
}

export async function deleteExperience(id: string): Promise<Experience | null> {
  return prisma.experience.delete({ where: { id } });
}
