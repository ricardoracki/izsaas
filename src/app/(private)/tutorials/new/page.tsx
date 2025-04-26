"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createPost } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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

export default function New() {
  const [loading, setLoading] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      tags: "",
      content: "",
    },
  });

  async function onSubmit(data: FormSchema) {
    try {
      setLoading(true);
      const { files, ...rest } = data;

      const id = await createPost(
        {
          ...rest,
          tags: rest.tags.split(",").map((tag) => tag.trim()),
        },
        isDraft
      );

      toast("Tutorial criado com sucesso!");

      router.replace(`/tutorials/${id}`);
    } catch (e) {
      console.error(e);
      toast("Ocorreu um erro inesperado ao criar o tutorial");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-ellipsis line-clamp-1">
        Criar tutorial
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título para o seu tutorial" {...field} />
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
          <FormField
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
          />
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
          <div className="flex items-center gap-3">
            <Switch checked={isDraft} onClick={() => setIsDraft((v) => !v)} />
            Salvar como rascunho?
          </div>
          <Button type="submit" loading={loading}>
            Salvar
          </Button>
        </form>
      </Form>
    </>
  );
}
