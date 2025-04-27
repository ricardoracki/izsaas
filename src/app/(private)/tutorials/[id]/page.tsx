import { Edit, Share2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarkdownReader } from "@/components/markdown-reader";
import { Separator } from "@/components/ui/separator";
import { db } from "@/database/client";
import { DeletePostButton } from "./_components/delete-post-button";
import { BadgeStatus } from "./_components/badge-status";
import { PublishButton } from "./_components/publish-button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { LikeButton } from "./_components/like-button";
import { getServerAuthSession } from "@/auth";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export default async function Dashboard(props: RouteProps) {
  const { id } = await props.params;
  const session = await getServerAuthSession();
  const tutorial = await db.post.findFirst({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      status: true,
      tags: true,
      author: true,
      PostReaction: {
        where: { userId: session?.user.id as string },
      },
    },
  });

  if (!tutorial) {
    return <div>Tutorial não encontrado</div>;
  }

  console.log("tutorial", tutorial);

  return (
    <>
      <Breadcrumb className="mb-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Início</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/tutorials" replace>
                Tutoriais
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>...</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between flex-nowrap overflow-hidden">
        <div className="">
          <h1 className="inline-flex text-3xl font-bold mb-2 text-ellipsis line-clamp-1">
            {tutorial.title}
          </h1>
          <BadgeStatus
            status={tutorial.status}
            className="-translate-y-1/2 translate-x-1"
          />
        </div>
        <div className="flex gap-3 ml-3">
          <Button size="icon" variant="outline">
            <Share2 />
          </Button>
          <Button size="icon" variant="outline">
            <Edit />
          </Button>
        </div>
      </div>
      {/*  <h2 className="text-lg text-muted-foreground">
        Como calibrar um detector de marca(foto-célula)
      </h2> */}
      <div className="flex flex-wrap gap-1">
        {tutorial.tags.map((tag) => (
          <Badge key={tag} className="text-xs" variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="my-6 px-6">
        <MarkdownReader>{tutorial.content}</MarkdownReader>
      </div>

      <Separator className="mt-2 mb-6" />

      <div className="flex gap-3 flex-wrap ">
        <LikeButton
          postId={tutorial.id}
          userId={session?.user.id as string}
          liked={!!tutorial.PostReaction.length}
        />
        <Button variant="ghost">
          <Edit /> Editar tutorial
        </Button>
        <Button variant="ghost">
          <Share2 /> Compartilhar
        </Button>
        <PublishButton post={tutorial} />
        <DeletePostButton postId={tutorial.id} />
      </div>
    </>
  );
}
