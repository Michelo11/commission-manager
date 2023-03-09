import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { octokit } from "@/lib/octokit";
import { cache } from "react";

let projects: any[] = [];

async function fetch() {
  const { data } = await octokit.repos.listForUser({
    username: "Michelo11",
    type: "owner",
  });

  for (const project of data) {
    if (project.name === process.env.NEXT_PUBLIC_GITHUB_NAME) continue;
    const { data: languages } = await octokit.repos.listLanguages({
      owner: "Michelo11",
      repo: project.name,
    });
    projects.push({
      name: project.name,
      description: project.description,
      language: Object.keys(languages)[0],
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (projects.length == 0) await fetch();
  res.json(projects);
}
