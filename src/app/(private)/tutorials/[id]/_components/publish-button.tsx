"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Post } from "@/database/generated";
import { Pin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { publishPost } from "../actions";

type publishButtonProps = {
  post: Pick<Post, "id" | "status">;
};

export function PublishButton({ post }: publishButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handlePublish() {
    try {
      setLoading(true);
      await publishPost(post.id);
      toast.success("Tutorial publicado com sucesso!");
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro inesperado ao publicar 0 tutorial");
    } finally {
      setLoading(false);
    }
  }

  if (post.status !== "DRAFT") return null;

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)} disabled={loading}>
        <Pin /> {loading ? "Publicando..." : "Publicar"}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Visibilidade do tutorial</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Deseja publicar este tutorial?
            </DialogDescription>
            <DialogFooter>
              <Button
                variant="default"
                loading={loading}
                onClick={handlePublish}
              >
                Sim
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
}
