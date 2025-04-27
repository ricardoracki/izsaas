import {
  Book,
  Clock,
  Eye,
  Plus,
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
import { isRecent } from "@/lib/post-utils";
import { PostsList } from "./_components/post-list";

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

      <PostsList
        userId={session?.user.id as string}
        page={page}
        perPage={perPage}
      />
    </>
  );
}
