// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createUserStory } from "@/services/openai/user-story";

type Data = {
  message: string;
  error?: unknown;
  response?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await createUserStory(req.body.body);
    res
      .status(200)
      .json({ message: "Successfully created User-Story", response });
  } catch (error) {
    res.status(500).json({ message: "Caught an Error", error });
  }
}
