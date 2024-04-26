import { prisma, User } from "@/utils/prisma";

export async function createUser(data: Omit<User, "id">): Promise<User> {
  console.log(data, "form function");
  return prisma.user.create({
    data
    // where: {
    //   email: data.email,
    // },
    // update: {
      // name: data.name,
      // Dname: data.Dname,
      // about: data.about,
      // image: data.image,
      // role: data.role,
      // website: data.website,
      // email: data.email,
    // },
    // create: {
      
    //   Dname: data.Dname,
    //   about: data.about,
    //   image: data.image,
    //   role: data.role,
    //   website: data.website,
    //   email: data.email,
    // },
  });
}

export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id },
    include: { projects: true, experience: true },
  });
}

export async function getUserByUserName(username: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { username },include: { projects: true,experience:true }});
  // });
}
export async function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },include: { projects: true,experience:true }});
  // });
}
export async function updateUser(
  id: string,
  data: Partial<User>
): Promise<User | null> {
  return prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: string): Promise<User | null> {
  return prisma.user.delete({ where: { id } });
}
