"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Ban,
  Check,
  Lock,
  MoreHorizontal,
  ShieldAlertIcon,
  ShieldCheck,
  Trash,
  User,
  UserCheck,
  UserMinus,
  UserX,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteUser, setUserStatus } from "../actions";

import { Button } from "@/components/ui/button";
import { UserBadge } from "./user-badge";
import { User as UserType } from "@/database/generated";
import { getUserInitials } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";

type UserControlsProps = {
  user: Omit<UserType, "password"> & { Post: { id: string }[] };
};

export const UserControls = ({ user }: UserControlsProps) => {
  const [loading, setLoading] = useState(false);

  const [dialog, setDialog] = useState<
    "" | "profile" | "approve" | "block" | "ban" | "admin" | "delete"
  >("");

  async function handleStatusChange() {
    try {
      setLoading(true);

      if (dialog === "delete") {
        await deleteUser(user.id);
        toast("Sucesso ao excluir o usuário");
      } else {
        await setUserStatus(
          user,
          dialog === "block"
            ? "BLOCKED"
            : dialog === "approve"
            ? "MEMBER"
            : dialog === "admin"
            ? "ADMIN"
            : "BANNED"
        );
        toast("Sucesso ao alterar o status do usuário");
      }
      setDialog("");
    } catch (error) {
      console.error(error);
      toast("Ocorreu um erro inesperado ao tentar alterar o status do usuário");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setDialog("profile")}>
            <User className="h-4 w-4 mr-2" />
            Ver perfil
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {user.status !== "MEMBER" && (
            <DropdownMenuItem onClick={() => setDialog("approve")}>
              <UserCheck className="h-4 w-4 mr-2 text-green-600" />
              Tornar membro
            </DropdownMenuItem>
          )}

          {user.status !== "BLOCKED" && (
            <DropdownMenuItem onClick={() => setDialog("block")}>
              <UserMinus className="h-4 w-4 mr-2 text-orange-600" />
              Bloquear usuário
            </DropdownMenuItem>
          )}
          {user.status !== "BANNED" && (
            <DropdownMenuItem onClick={() => setDialog("ban")}>
              <UserX className="h-4 w-4 mr-2 text-red-600" />
              Banir usuário
            </DropdownMenuItem>
          )}
          {user.status !== "ADMIN" && (
            <DropdownMenuItem onClick={() => setDialog("admin")}>
              <ShieldAlertIcon className="h-4 w-4 mr-2 text-purple-600" />
              Tornar Administrador
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setDialog("delete")}>
            <Trash className="h-4 w-4 mr-2 text-red-600" />
            Excluir usuário
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Diálogo de confirmação */}
      {dialog && (
        <Dialog open={!!dialog} onOpenChange={() => setDialog("")}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {dialog === "profile"
                  ? "Perfil do Usuário"
                  : dialog === "approve"
                  ? "Aprovar Usuário"
                  : dialog === "block"
                  ? "Bloquear Usuário"
                  : dialog === "admin"
                  ? "Tornar Administrador"
                  : dialog === "delete"
                  ? "Excluir Usuário"
                  : "Banir Usuário"}
              </DialogTitle>
              <DialogDescription>
                {dialog === "profile"
                  ? "Detalhes do perfil do usuário"
                  : dialog === "approve"
                  ? "Tem certeza que deseja aprovar este usuário?"
                  : dialog === "block"
                  ? "Tem certeza que deseja bloquear este usuário? Ele não poderá acessar a plataforma até ser desbloqueado."
                  : dialog === "admin"
                  ? "Tem certeza que deseja tornar este usuário um administrador? Ele poderá criar e editar tutoriais."
                  : dialog === "delete"
                  ? "Tem certeza que deseja excluir este usuário? Esta ação nao pode ser desfeita."
                  : "Tem certeza que deseja banir este usuário? Esta ação não pode ser desfeita facilmente."}
              </DialogDescription>
            </DialogHeader>

            {dialog === "profile" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={user.image || "/placeholder.svg"}
                      alt={user.name}
                    />
                    <AvatarFallback>
                      {getUserInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Posts</p>
                    <p>{user.Post.length}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Empresa</p>
                    <p></p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Data de Cadastro
                    </p>
                    <p>{user.createdAt.toLocaleDateString("pt-br")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Último Acesso
                    </p>
                    <p>{user.lastAccessedAt.toLocaleDateString("pt-br")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p>
                      <UserBadge status={user.status} />
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 py-4">
                <Avatar>
                  <AvatarImage src={user.image || ""} alt={user.name} />
                  <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
            )}

            <DialogFooter>
              {dialog === "profile" ? (
                <Button onClick={() => setDialog("")}>Fechar</Button>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setDialog("")}>
                    Cancelar
                  </Button>
                  <Button
                    loading={loading}
                    variant={
                      dialog === "approve"
                        ? "default"
                        : dialog === "block"
                        ? "outline"
                        : "destructive"
                    }
                    onClick={handleStatusChange}
                  >
                    {dialog === "approve" ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Aprovar
                      </>
                    ) : dialog === "block" ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Bloquear
                      </>
                    ) : dialog === "admin" ? (
                      <>
                        <ShieldCheck className="h-4 w-4 mr-2" />
                        Tornar admin
                      </>
                    ) : dialog === "delete" ? (
                      <>
                        <Trash className="h-4 w-4 mr-2" />
                        Excluir
                      </>
                    ) : (
                      <>
                        <Ban className="h-4 w-4 mr-2" />
                        Banir
                      </>
                    )}
                  </Button>
                </>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
