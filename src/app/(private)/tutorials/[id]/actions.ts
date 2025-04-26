"use server";

import { db } from "@/database/client";
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
