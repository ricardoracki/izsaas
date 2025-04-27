"use client";
import { Post, PostReaction, User } from "@/database/generated";
import { Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { updatePost } from "../actions";

type EditPostButtonProps = {
  size?: "icon" | "default";
  post: Pick<Post, "id" | "status" | "title" | "content" | "tags"> & {
    author: User;
  } & { PostReaction: PostReaction[] };
  userId: string;
};

const formSchema = z.object({
  title: z
    .string()
    .min(5, "O título deve conter ao menos 5 caracteres")
    .max(32, "O título deve conter no máximo 32 caracteres"),
  tags: z.string().min(2, "Deve conter ao menos uma tag"),
  files: z.string().optional(),
  content: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

export function EditPostButton({ size, userId, post }: EditPostButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      tags: post.tags.join(", "),
      content: post.content,
    },
  });

  useEffect(() => {
    form.setValue("title", post.title);
    form.setValue("content", post.content);
    form.setValue("tags", post.tags.join(", "));
  }, [open]);

  /*
   * SOMENTE O AUTOR DO POST PODERÁ EDITAR O POST
   */
  if (userId !== post.author.id) return null;

  async function onSubmit({ files, ...data }: FormSchema) {
    try {
      setLoading(true);
      await updatePost(post.id, {
        ...data,
        tags: data.tags.split(",").map((a) => a.trim()),
      });
      setOpen(false);
      toast.success("Alterações salvas com sucesso!");
    } catch (error) {
      console.error("Edit post error:", error);
      toast.error("Ocorreu um erro inesperado ao tentar alterar o post");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        variant={size === "icon" ? "outline" : "ghost"}
        size={size}
        onClick={() => setOpen(true)}
      >
        <Edit /> {size !== "icon" && "Editar"}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-screen sm:max-w-[425px] overflow-auto [&::-webkit-scrollbar]:hidden">
          <DialogHeader>
            <DialogTitle>Editar postagem</DialogTitle>
            <DialogDescription>
              Altere a postagem conforme necessário e clique em salvar
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Título para o seu tutorial"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input placeholder="Separe com vírgula" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/*  <FormField
                control={form.control}
                name="files"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imagens</FormLabel>
                    <FormControl>
                      <Input type="file" multiple />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conteúdo</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" loading={loading}>
                  Salvar alterações
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancelar
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
