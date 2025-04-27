"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Book, Cog, Home, LogOut, Menu, Search, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavContainer,
  NavItem,
  NavItemLink,
  NavList,
  NavPortal,
} from "@/components/header/app-nav";
import { cn, getUserInitials } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

import { Button } from "../ui/button";
import Link from "next/link";
import { Logo } from "../logo";
import { ToggleTheme } from "../toggle-theme";
import { User } from "@/auth";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

type Route = {
  label: string;
  href: string;
  Icon: React.ReactNode;
};

const routes: Route[] = [
  { href: "/home", label: "Início", Icon: <Home /> },
  { href: "/tutorials", label: "Tutoriais", Icon: <Book /> },
];

type Props = {
  user?: User;
};

export const AppHeader = ({ user }: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname]);

  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-18 flex items-center gap-3 px-3 border-b border-border border-dashed bg-background/60 backdrop-blur-sm">
        <Button
          variant={"outline"}
          size="icon"
          onClick={onOpen}
          className="md:hidden"
          aria-label="Abrir menu de navegação"
        >
          {/* MOBILE NAVBAR OPEN */}
          <Menu />
        </Button>
        <Logo className="hidden md:inline-flex" />

        <nav
          role="navigation"
          aria-label="Navegação principal (celular)"
          className="hidden md:block"
        >
          <ul className="flex gap-3">
            {routes.map((route) => (
              <li key={route.href}>
                <NavItemLink active={pathname.startsWith(route.href)} asChild>
                  <Link href={route.href}>
                    <span>{route.label}</span>
                  </Link>
                </NavItemLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-1" />
        <Button size="icon" variant="outline" aria-label="Pesquisar">
          <Search />
        </Button>
        <ToggleTheme />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="size-10">
              <AvatarImage alt={user?.name || ""} src={user?.image || ""} />
              <AvatarFallback>{getUserInitials(user?.name)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">Perfil</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()} variant="destructive">
              <LogOut /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* MOBILE NAVBAR */}
      <NavPortal
        role="navigation"
        aria-label="Navegação principal (celular)"
        className={cn(
          "overflow-hidden transition-all ease-in-out duration-300 md:hidden",
          {
            "w-screen": open,
            "w-0": !open,
          }
        )}
      >
        <NavContainer>
          <div className="flex items-center justify-between p-3 border-b border-dashed border-border">
            <Logo />
            <Button
              size="icon"
              variant="outline"
              aria-label="Fechar menu"
              onClick={onClose}
            >
              <X />
            </Button>
          </div>
          <NavList>
            {routes.map((route) => (
              <NavItem key={route.href}>
                <NavItemLink active={pathname.startsWith(route.href)} asChild>
                  <Link href={route.href}>
                    {route.Icon}
                    <span>{route.label}</span>
                  </Link>
                </NavItemLink>
              </NavItem>
            ))}

            <div className="flex-1 border-b border-border border-dashed" />
            <NavItem>
              <NavItemLink asChild>
                <button onClick={() => signOut()}>
                  <LogOut />
                  <span>Logout</span>
                </button>
              </NavItemLink>
            </NavItem>
            <NavItem>
              <NavItemLink>
                <Cog />
                <span>Configurações</span>
              </NavItemLink>
            </NavItem>
          </NavList>
        </NavContainer>
      </NavPortal>
    </>
  );
};
