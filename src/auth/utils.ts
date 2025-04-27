import { UserStatus } from "@/database/generated";
import { getServerAuthSession } from ".";
import { redirect } from "next/navigation";

const LEVELS: UserStatus[] = [
  "BANNED",
  "BLOCKED",
  "PENDING",
  "LIMITED",
  "MEMBER",
  "MODERATOR",
  "ADMIN",
];

export const hasPermission = async (permissionRequired: UserStatus) => {
  const session = await getServerAuthSession();

  if (!session?.user?.status) return false;
  const userLevel = LEVELS.indexOf(session.user.status as UserStatus);
  const requiredLevel = LEVELS.indexOf(permissionRequired);

  return userLevel >= requiredLevel;
};

export const authorizeOrRedirect = async (
  permissionRequired: UserStatus,
  path: string
) => {
  const authorized = await hasPermission(permissionRequired);
  if (!authorized) return redirect(path);
};
