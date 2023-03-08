import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { octokit } from "@/lib/octokit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { data } = await octokit.repos.listForUser({
        username: 'Michelo11',
        type: 'owner'
    })

    const projects = []

    for (const project of data) {
        const { data: languages } = await octokit.repos.listLanguages({
            owner: "Michelo11",
            repo: project.name
        })
        projects.push({
            name: project.name,
            description: project.description,
            language: Object.keys(languages)[0]
        })
    }
    res.json(projects)
}
