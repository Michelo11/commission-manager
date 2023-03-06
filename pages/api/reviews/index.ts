import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

async function get(req: NextApiRequest, res: NextApiResponse) {
  const reviews = await prisma.review.findMany({
    include: {
      project: {
        include: {
          owner: true,
        },
      },
    },
  });

  res.status(200).json(reviews);
}

async function post(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req,res,authOptions);

    if(!session){
        res.status(401).json({ error: "Not authenticated" });
        return;
    }

    const { projectId, rating, description } = req.body;
    if (!projectId || !rating || !description) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    const project = await prisma.project.findUnique({
        where: {
            id: projectId,
        },
    });

    if (!project || project.ownerId !== session.user.id) {
        res.status(403).json({ error: "Not authorized" });
        return;
    }

    const review = await prisma.review.create({
        data: {
            rating,
            description,
            projectId,
        },
    });

    res.status(200).json(review);
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
