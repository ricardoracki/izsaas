"use client";

import { useCallback, useDeferredValue, useEffect, useState } from "react";
import Link from "next/link";
import type {
  PostReaction,
  Post as PrimitivePost,
  User as UserType,
} from "@/database/generated";
import { BadgeStatus } from "../[id]/_components/badge-status";
import { isRecent } from "@/lib/post-utils";
import { Clock, Eye, FilterX, Search, ThumbsUp, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { getPosts } from "../actions";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { set } from "zod";
import { cn } from "@/lib/utils";

type Post = {
  author: UserType;
  PostReaction: PostReaction[];
} & PrimitivePost;

type TutorialListProps = {
  userId: string;
  page: number;
  perPage: number;
};

export function PostsList({ userId, perPage, page }: TutorialListProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const getData = useCallback(async () => {
    const result = await getPosts({ page, perPage, q: deferredSearch, userId });
    setPosts(result[0] as Post[]);
    setCount(result[1] as number);
    setLoading(false);
  }, [page, perPage, userId, deferredSearch]);

  useEffect(() => {
    getData();
  }, [deferredSearch]);

  return (
    <>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Buscar tutoriais ou autores..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          size="icon"
          className={cn(
            "absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-transparent text-muted-foreground dark:hover:bg-transparent ",
            search.length > 0 ? "opacity-100" : "opacity-0"
          )}
          variant="ghost"
          onClick={() => setSearch("")}
        >
          <FilterX />
        </Button>
      </div>

      {loading ? (
        <>
          <Skeleton className="w-full h-18 mb-4 opacity-100" />
          <Skeleton className="w-full h-18 mb-4 opacity-75" />
          <Skeleton className="w-full h-18 mb-4 opacity-50" />
          <Skeleton className="w-full h-18 mb-4 opacity-25" />
        </>
      ) : (
        <div className="space-y-4 ">
          {posts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              {!!deferredSearch
                ? "Nenhum tutorial encontrado"
                : `Nenhum tutorial encontrado para ${deferredSearch}`}
            </div>
          )}

          {!!posts &&
            posts.map((tutorial) => {
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
                      {isRecent(tutorial.createdAt) && (
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
                        {tutorial.PostReaction.length} agradecimentos
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          <Pagination
            currentPage={page}
            pages={Math.ceil(count / perPage)}
            perPage={perPage}
            total={count}
            showInThisPage={posts.length}
            messageUnit="tutoriais"
          />
        </div>
      )}
    </>
  );
}
