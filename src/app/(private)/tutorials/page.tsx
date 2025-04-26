import {
  Book,
  Clock,
  Eye,
  Plus,
  BotIcon as Robot,
  Search,
  ThumbsUp,
  User,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { db } from "@/database/client";
import { getIntQueryValue } from "@/lib/utils";
import { Pagination } from "@/components/ui/pagination";
import { BadgeStatus } from "./[id]/_components/badge-status";
import { getServerAuthSession } from "@/auth";

type RouteProps = {
  searchParams: Promise<{
    page?: string;
    perPage?: string;
    q?: string;
  }>;
};

export default async function TutorialList({ searchParams }: RouteProps) {
  const query = await searchParams;
  const session = await getServerAuthSession();

  const page = getIntQueryValue(query.page) || 1;
  const perPage = getIntQueryValue(query.perPage) || 10;

  const [posts, count] = await Promise.all([
    db.post.findMany({
      select: {
        author: true,
        id: true,
        title: true,
        content: true,
        tags: true,
        views: true,
        createdAt: true,
        updatedAt: true,
        status: true,
        likes: true,
        images: true,
      },
      where: {
        AND: [
          {
            OR: [
              {
                status: "PUBLISHED",
              },
              {
                author: {
                  id: session?.user.id,
                },
              },
            ],
          },
          query.q
            ? {
                OR: [
                  { tags: { has: query.q.toLowerCase() } },
                  {
                    title: {
                      contains: query.q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    content: {
                      contains: query.q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    author: {
                      name: {
                        contains: query.q,
                        mode: "insensitive",
                      },
                    },
                  },
                ],
              }
            : {},
        ],
      },
      orderBy: { createdAt: "desc" },
      take: perPage,
      skip: (page - 1) * perPage,
    }),
    db.post.count({
      where: {
        AND: [
          {
            OR: [
              {
                status: "PUBLISHED",
              },
              {
                author: {
                  id: session?.user.id,
                },
              },
            ],
          },
          query.q
            ? {
                OR: [
                  { tags: { has: query.q.toLowerCase() } },
                  {
                    title: {
                      contains: query.q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    content: {
                      contains: query.q.toLowerCase(),
                      mode: "insensitive",
                    },
                  },
                  {
                    author: {
                      name: {
                        contains: query.q,
                        mode: "insensitive",
                      },
                    },
                  },
                ],
              }
            : {},
        ],
      },
    }),
  ]);

  const totalPages = Math.ceil(count / perPage);

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Book className="h-6 w-6" />
          Tutoriais
        </h1>
        <Button asChild variant="outline">
          <Link href="/tutorials/new">
            <Plus />
            Criar tutorial
          </Link>
        </Button>
      </div>

      <div className="relative mb-6">
        <form method="GET">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            name="q"
            type="text"
            placeholder="Buscar tutoriais ou autores..."
            className="pl-10"
            defaultValue={query.q}
          />
        </form>
      </div>

      <div className="space-y-4 ">
        {posts.map((tutorial) => {
          const recent = true;
          const star = false;
          return (
            <Link
              href={`/tutorials/${tutorial.id}`}
              prefetch={false}
              key={tutorial.id}
              className="p-4 border rounded-lg hover:bg-card transition-colors cursor-pointer flex items-start gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{tutorial.title}</h3>
                  {tutorial.status == "DRAFT" && (
                    <BadgeStatus status={tutorial.status} />
                  )}
                  {recent && (
                    <Badge variant="secondary" className="">
                      <Clock className="h-3 w-3 mr-1" />
                      Recente
                    </Badge>
                  )}
                  {star && (
                    <Badge variant="secondary" className="">
                      <Eye className="h-3 w-3 mr-1" />
                      Mais visto
                    </Badge>
                  )}
                </div>

                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <div className="flex items-center mr-4">
                    <User className="h-3 w-3 mr-1" />
                    {tutorial.author.name}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    {tutorial.views} agradecimentos
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        <Pagination
          currentPage={page}
          pages={totalPages}
          perPage={perPage}
          total={count}
          showInThisPage={posts.length}
          messageUnit="tutoriais"
        />

        {posts.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhum tutorial encontrado para "busca"
          </div>
        )}
      </div>
    </>
  );
}
