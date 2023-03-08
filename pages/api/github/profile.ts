import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { octokit } from "@/lib/octokit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { data } = await octokit.users.getByUsername({
        username: 'Michelo11',
    })

    res.json({
        bio: data.bio,
        avatar: data.avatar_url,
        name: data.name
    })
}