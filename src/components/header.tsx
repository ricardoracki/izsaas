import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { Input } from './ui/input'
import Link from 'next/link'
import { ToggleTheme } from './toggle-theme'

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 h-14 bg-background/60 backdrop-blur-sm px-6 border-dashed border-b flex items-center  gap-x-4 ">
    <span className="text-xl font-semibold">IZSaaS</span>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink>Home</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tutoriais</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href={'/tutorials'}>
              Buscar tutorial
            </NavigationMenuLink>
            <NavigationMenuLink>Compartilhamentos</NavigationMenuLink>
            <NavigationMenuLink>Links temporários</NavigationMenuLink>
            <NavigationMenuLink href={'/new'}>
              Criar tutorial
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>Usuários</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <span className="flex-1" />
    <Input placeholder="Search..." className="max-w-xs" />

    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-muted-foreground">
          Minha conta
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="#">Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <ToggleTheme />
  </header>
)
