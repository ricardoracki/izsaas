"use server";

import { db } from "@/database/client";
import { Post } from "@/database/generated";
import { revalidatePath } from "next/cache";

export async function deletePost(id: string) {
  await db.post.delete({
    where: { id },
  });

  revalidatePath("/tutorials");
}

export async function publishPost(id: string) {
  await db.post.update({
    where: { id },
    data: { status: "PUBLISHED" },
  });

  revalidatePath(`/tutorials/${id}`);
  revalidatePath("/tutorials");
}

export async function likePost(postId: string, userId: string) {
  await db.postReaction.create({
    data: {
      postId,
      userId,
    },
  });

  revalidatePath(`/tutorials/${postId}`);
  revalidatePath("/tutorials");
}

export const updatePost = async (postId: string, data: Partial<Post>) => {
  await db.post.update({
    where: { id: postId },
    data,
  });

  revalidatePath(`/tutorials/${postId}`);
  revalidatePath(`/tutorials`);
};
