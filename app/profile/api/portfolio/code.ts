import { prisma,User,Message } from "@/utils/prisma";
export async function getUserByUserName(
  username: string
): Promise<User | null> {
  return prisma.user.findUnique({
    where: { username },
    include: { projects: true, experience: true },
  });
}
export async function createMessage(data : Omit<Message,"id">):Promise<Message> {
    return prisma.message.create({
        data
    })
};
