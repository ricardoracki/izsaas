"use client";
import { Button } from "@/components/ui/button";
import { Post } from "@/database/generated";
import { Copy } from "lucide-react";
import { toast } from "sonner";

type CopyButtonProps = {
  size?: "icon" | "default";
  post: Pick<Post, "title" | "content">;
};

export function CopyButton({ size, post }: CopyButtonProps) {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        `** ${post.title} **\n\n${post.content}`
      );
      toast.success("Conteúdo copiado com sucesso");
    } catch (error) {
      console.error("Copy post content error: ", error);
      toast.success("Conteúdo copiado com sucesso");
    }
  }

  return (
    <Button
      size={size}
      variant={size == "icon" ? "outline" : "ghost"}
      onClick={handleCopy}
      title="Copiar conteúdo"
    >
      <Copy /> {size !== "icon" && "Copiar"}
    </Button>
  );
}
