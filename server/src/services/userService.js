import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const userService = {
  async createUser(data) {
    return prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  },

  async getAllUsers() {
    return prisma.user.findMany();
  },
};
