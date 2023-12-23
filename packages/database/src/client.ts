import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-unused-vars
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

export const prisma = global.prisma ?? prismaClientSingleton();

if (process.env["NODE_ENV"] !== "production") global.prisma = prisma;

export * from "@prisma/client";
