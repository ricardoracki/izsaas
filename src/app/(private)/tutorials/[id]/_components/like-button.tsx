"use client";
import { Button } from "@/components/ui/button";

import { ThumbsUp } from "lucide-react";
import { likePost } from "../actions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function LikeButton({
  postId,
  userId,
  authorId,
  liked = false,
}: {
  postId: string;
  authorId: string;
  userId: string;
  liked?: boolean;
}) {
  async function handleLike() {
    try {
      await likePost(postId, userId);
      toast.success("Post curtido com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro ao curtir o post!");
      console.error("Error liking post:", error);
    }
  }

  if (authorId === userId) return null;

  return (
    <Button variant="ghost" onClick={handleLike} disabled={liked}>
      <ThumbsUp
        className={cn("text-text", { "fill-accent-foreground": liked })}
      />
      Gostei
    </Button>
  );
}
