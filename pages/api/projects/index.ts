import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

async function get(req: NextApiRequest, res: NextApiResponse) {
  const projects = await prisma.project.findMany({});

  res.status(200).json(projects);
}

async function post(req: NextApiRequest, res: NextApiResponse) {
    res.status(501).end();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await get(req, res);
      break;
    case "POST":
      await post(req, res);
      break;
    default:
      res.status(405).end();
  }
}
