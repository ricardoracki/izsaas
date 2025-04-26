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
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { deletePost } from "../actions";
import { useRouter } from "next/navigation";

type DeletePostButtonProps = {
  postId: string;
};

export function DeletePostButton({ postId }: DeletePostButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    try {
      setLoading(false);
      await deletePost(postId);
      toast("Tutorial excluído com sucesso");
      router.replace("/tutorials");
    } catch (e) {
      console.error(e);
      toast("Ocorreu um erro inesperado ao excluir o tutorial");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        <Trash /> Excluir
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogPortal>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Excluir este tutorial?</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Esta ação é irreversível. Você tem certeza de que deseja excluir
              este tutorial?
            </DialogDescription>
            <DialogFooter>
              <Button
                variant="destructive"
                loading={loading}
                onClick={handleDelete}
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
