/**
  DRAFT
  PUBLISHED
  BLOCKED
  PRIVATE
  SOFT_DELETED
 */

import { Badge, BadgeProps } from "@/components/ui/badge";
import { PostStatus } from "@/database/generated";

type BadgeStatusProps = BadgeProps & {
  status: PostStatus[number];
};

const map: { [key: PostStatus[number]]: BadgeProps } = {
  DRAFT: { variant: "secondary", children: "Rascunho" },
  SOFT_DELETED: { variant: "destructive", children: "Excluído" },
  PUBLISHED: { variant: "default", children: "Publicado" },
  BLOCKED: { variant: "destructive", children: "Bloqueado" },
  PRIVATE: { variant: "outline", children: "Privado" },
};

export const BadgeStatus = ({ status, className }: BadgeStatusProps) => (
  <Badge {...map[status]} className={className} />
);
