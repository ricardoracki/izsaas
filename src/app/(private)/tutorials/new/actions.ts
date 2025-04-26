"use server";

import { getServerAuthSession } from "@/auth";
import { db } from "@/database/client";
import { revalidatePath } from "next/cache";

type Tutorial = {
  title: string;
  tags: string[];
  files?: string[];
  content: string;
};

export const createPost = async (data: Tutorial, isDraft?: boolean) => {
  // TODO: Files upload
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    // Handle the case when the user is not authenticated
    throw new Error("User not authenticated");
  }

  const userId = session.user.id;

  const { id } = await db.post.create({
    select: { id: true },
    data: {
      ...data,
      userId: userId,
      status: isDraft ? "DRAFT" : "PUBLISHED",
    },
  });

  revalidatePath("/tutorials");

  return id;
};
