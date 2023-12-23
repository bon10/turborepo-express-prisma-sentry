import { prisma } from "@repo/database";
import type { Request, Response } from "express";

export const getUsersHandler = async (
  _: Request,
  response: Response
): Promise<void> => {
  try {
    const allUsers = await prisma.user.findMany();

    response.status(200).json(allUsers);
  } catch (error) {
    // eslint-disable-next-line no-console -- needed for logging
    console.error(error);
    response.status(500).json({ error });
  }
};
