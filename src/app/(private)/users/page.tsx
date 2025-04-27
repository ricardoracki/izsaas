import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Shield, UserCheck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getIntQueryValue, getUserInitials } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Filters } from "./_components/filters";
import { Pagination } from "../../../components/ui/pagination";
import { UserBadge } from "./_components/user-badge";
import { UserControls } from "./_components/user-controls";
import { UserStatus } from "@/database/generated";
import { db } from "@/database/client";

type RouteProps = {
  searchParams: Promise<{
    page?: string;
    perPage?: string;
    status?: string;
    q?: string;
  }>;
};

export default async function AdminUsers({ searchParams }: RouteProps) {
  const query = await searchParams;

  const page = getIntQueryValue(query.page) || 1;
  const perPage = getIntQueryValue(query.perPage) || 10;
  const statusFiltered: UserStatus[] = (
    query.status
      ? (query.status.split(" ").map((t) => t.toUpperCase()) as UserStatus[])
      : []
  ).filter((a) => a in UserStatus);
  const nameFiltered = query.q;

  const [users, count] = await Promise.all([
    db.user.findMany({
      where: {
        OR: nameFiltered
          ? [
              {
                name: { contains: nameFiltered, mode: "insensitive" },
                email: { contains: nameFiltered, mode: "insensitive" },
              },
            ]
          : undefined,
        status: statusFiltered.length > 0 ? { in: statusFiltered } : undefined,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        status: true,
        lastAccessedAt: true,
        image: true,
        description: true,
        updatedAt: true,
        Post: {
          select: {
            id: true,
          },
        },
      },
      take: perPage,
      skip: (page - 1) * perPage,
    }),
    db.user.count({
      where: {
        OR: nameFiltered
          ? [
              {
                name: { contains: nameFiltered, mode: "insensitive" },
                email: { contains: nameFiltered, mode: "insensitive" },
              },
            ]
          : undefined,
        status: statusFiltered.length > 0 ? { in: statusFiltered } : undefined,
      },
    }),
  ]);

  const pages = Math.ceil(count / perPage);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="h-6 w-6" />
          Administração de Usuários
        </h1>
      </div>

      <div className="rounded-lg border shadow-sm">
        {/* Barra de ferramentas */}
        <Filters />

        {/* Tabela de usuários */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox checked={false} aria-label="Selecionar todos" />
                </TableHead>
                <TableHead className="w-[250px]">Usuário</TableHead>

                <TableHead className="hidden md:table-cell">
                  Data de Cadastro
                </TableHead>
                <TableHead className="hidden lg:table-cell">
                  Último Acesso
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px] text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      checked={false}
                      aria-label={`Selecionar ${user.name}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.image || ""} alt={user.name} />
                        <AvatarFallback>
                          {getUserInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    {user.createdAt.toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {user.lastAccessedAt.toLocaleDateString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    <UserBadge status={user.status as any} />
                  </TableCell>
                  <TableCell className="text-right">
                    <UserControls user={user} />
                  </TableCell>
                </TableRow>
              ))}

              {count === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-8 text-muted-foreground"
                  >
                    Nenhum usuário encontrado com os filtros atuais
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <Pagination
          showInThisPage={users.length}
          currentPage={page}
          pages={pages}
          total={count}
          perPage={perPage}
          messageUnit="usuários"
        />
      </div>
    </>
  );
}
