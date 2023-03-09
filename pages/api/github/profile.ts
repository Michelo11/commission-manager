import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { octokit } from "@/lib/octokit";
import { cache } from "react";

let profile: any;

async function fetch() {
  const { data } = await octokit.users.getByUsername({
    username: "Michelo11",
  });

  profile = {
    bio: data.bio,
    avatar: data.avatar_url,
    name: data.name,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!profile) await fetch();
  res.json(profile);
}