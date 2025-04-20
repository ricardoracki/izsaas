'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Ban,
  Check,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Filter,
  Lock,
  MoreHorizontal,
  Search,
  Shield,
  User,
  UserCheck,
  UserMinus,
  UserX,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { UserBadge } from './_components/user-bade'
import { useState } from 'react'

// Dados fictícios de usuários
const users = [
  {
    id: 1,
    nome: 'Carlos Mendes',
    email: 'carlos.mendes@email.com',
    dataCadastro: '15/03/2024',
    ultimoAcesso: '12/04/2024',
    status: 'approved',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Engenheiro de Automação',
    empresa: 'TechAutomation',
  },
  {
    id: 2,
    nome: 'Ana Silva',
    email: 'ana.silva@email.com',
    dataCadastro: '22/03/2024',
    ultimoAcesso: '10/04/2024',
    status: 'pending',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Técnica em Eletrônica',
    empresa: 'ElectroSystems',
  },
  {
    id: 3,
    nome: 'Roberto Almeida',
    email: 'roberto.almeida@email.com',
    dataCadastro: '05/02/2024',
    ultimoAcesso: '08/04/2024',
    status: 'blocked',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Programador PLC',
    empresa: 'ControlTech',
  },
  {
    id: 4,
    nome: 'Juliana Costa',
    email: 'juliana.costa@email.com',
    dataCadastro: '18/01/2024',
    ultimoAcesso: '11/04/2024',
    status: 'approved',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Especialista em SCADA',
    empresa: 'DataControl',
  },
  {
    id: 5,
    nome: 'Marcos Oliveira',
    email: 'marcos.oliveira@email.com',
    dataCadastro: '30/03/2024',
    ultimoAcesso: '09/04/2024',
    status: 'banned',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Engenheiro Elétrico',
    empresa: 'PowerSystems',
  },
  {
    id: 6,
    nome: 'Fernanda Lima',
    email: 'fernanda.lima@email.com',
    dataCadastro: '12/02/2024',
    ultimoAcesso: '05/04/2024',
    status: 'pending',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Desenvolvedora IoT',
    empresa: 'SmartFactory',
  },
  {
    id: 7,
    nome: 'Paulo Santos',
    email: 'paulo.santos@email.com',
    dataCadastro: '25/01/2024',
    ultimoAcesso: '01/04/2024',
    status: 'approved',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Técnico de Manutenção',
    empresa: 'MaintainTech',
  },
  {
    id: 8,
    nome: 'Carla Rodrigues',
    email: 'carla.rodrigues@email.com',
    dataCadastro: '08/03/2024',
    ultimoAcesso: '07/04/2024',
    status: 'approved',
    avatar: '/placeholder.svg?height=40&width=40',
    cargo: 'Analista de Sistemas',
    empresa: 'SoftControl',
  },
]

export default function AdminUsers() {
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState('todos')
  const [usersSelecionados, setusersSelecionados] = useState<number[]>([])
  const [dialogUser, setdialogUser] = useState<any>(null)
  const [dialogAcao, setDialogAcao] = useState<string>('')

  // Filtrar usuários com base na busca e no filtro de status
  const usersFiltrados = users.filter(
    (user) =>
      (user.nome.toLowerCase().includes(busca.toLowerCase()) ||
        user.email.toLowerCase().includes(busca.toLowerCase())) &&
      (filtroStatus === 'todos' || user.status === filtroStatus)
  )

  // Função para alternar a seleção de um usuário
  const toggleSelecao = (id: number) => {
    if (usersSelecionados.includes(id)) {
      setusersSelecionados(usersSelecionados.filter((userId) => userId !== id))
    } else {
      setusersSelecionados([...usersSelecionados, id])
    }
  }

  // Função para selecionar/deselecionar todos os usuários
  const toggleSelecionarTodos = () => {
    if (usersSelecionados.length === usersFiltrados.length) {
      setusersSelecionados([])
    } else {
      setusersSelecionados(usersFiltrados.map((user) => user.id))
    }
  }

  // Função para abrir diálogo de confirmação
  const abrirDialogo = (user: any, acao: string) => {
    setdialogUser(user)
    setDialogAcao(acao)
  }

  // Renderizar o badge de status com a cor apropriada
  const renderizarStatus = (status: string) => {}

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="h-6 w-6" />
          Administração de Usuários
        </h1>
        <Button>
          <UserCheck className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      </div>

      <div className="rounded-lg border shadow-sm">
        {/* Barra de ferramentas */}
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar por nome ou email..."
              className="pl-9"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={filtroStatus} onValueChange={setFiltroStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="approved">Aprovados</SelectItem>
                <SelectItem value="pending">Pendentes</SelectItem>
                <SelectItem value="blocked">Bloqueados</SelectItem>
                <SelectItem value="banned">Banidos</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Ações em massa */}
        {usersSelecionados.length > 0 && (
          <div className="p-2 bg-muted/30 border-b flex items-center gap-2">
            <span className="text-sm ml-2">
              {usersSelecionados.length} usuário(s) selecionado(s)
            </span>
            <div className="ml-auto flex gap-2">
              <Button size="sm" variant="outline" className="text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                Aprovar
              </Button>
              <Button size="sm" variant="outline" className="text-orange-600">
                <Lock className="h-4 w-4 mr-1" />
                Bloquear
              </Button>
              <Button size="sm" variant="outline" className="text-red-600">
                <Ban className="h-4 w-4 mr-1" />
                Banir
              </Button>
            </div>
          </div>
        )}

        {/* Tabela de usuários */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={
                      usersFiltrados.length > 0 &&
                      usersSelecionados.length === usersFiltrados.length
                    }
                    onCheckedChange={toggleSelecionarTodos}
                    aria-label="Selecionar todos"
                  />
                </TableHead>
                <TableHead className="w-[250px]">Usuário</TableHead>
                <TableHead className="hidden md:table-cell">
                  Cargo/Empresa
                </TableHead>
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
              {usersFiltrados.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <Checkbox
                      checked={usersSelecionados.includes(user.id)}
                      onCheckedChange={() => toggleSelecao(user.id)}
                      aria-label={`Selecionar ${user.nome}`}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={user.avatar || '/placeholder.svg'}
                          alt={user.nome}
                        />
                        <AvatarFallback>
                          {user.nome.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.nome}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div>{user.cargo}</div>
                    <div className="text-sm text-muted-foreground">
                      {user.empresa}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {user.dataCadastro}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {user.ultimoAcesso}
                  </TableCell>
                  <TableCell>
                    <UserBadge status={user.status as any} />
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => abrirDialogo(user, 'perfil')}
                        >
                          <User className="h-4 w-4 mr-2" />
                          Ver perfil
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {user.status !== 'aprovado' && (
                          <DropdownMenuItem
                            onClick={() => abrirDialogo(user, 'aprovar')}
                          >
                            <UserCheck className="h-4 w-4 mr-2 text-green-600" />
                            Aprovar usuário
                          </DropdownMenuItem>
                        )}
                        {user.status !== 'bloqueado' && (
                          <DropdownMenuItem
                            onClick={() => abrirDialogo(user, 'bloquear')}
                          >
                            <UserMinus className="h-4 w-4 mr-2 text-orange-600" />
                            Bloquear usuário
                          </DropdownMenuItem>
                        )}
                        {user.status !== 'banido' && (
                          <DropdownMenuItem
                            onClick={() => abrirDialogo(user, 'banir')}
                          >
                            <UserX className="h-4 w-4 mr-2 text-red-600" />
                            Banir usuário
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}

              {usersFiltrados.length === 0 && (
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

        {/* Paginação */}
        <div className="p-4 border-t flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Mostrando <strong>{usersFiltrados.length}</strong> de{' '}
            <strong>{users.length}</strong> usuários
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-primary text-primary-foreground"
            >
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Diálogo de confirmação */}
      {dialogUser && (
        <Dialog open={!!dialogUser} onOpenChange={() => setdialogUser(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {dialogAcao === 'perfil'
                  ? 'Perfil do Usuário'
                  : dialogAcao === 'aprovar'
                  ? 'Aprovar Usuário'
                  : dialogAcao === 'bloquear'
                  ? 'Bloquear Usuário'
                  : 'Banir Usuário'}
              </DialogTitle>
              <DialogDescription>
                {dialogAcao === 'perfil'
                  ? 'Detalhes do perfil do usuário'
                  : dialogAcao === 'aprovar'
                  ? 'Tem certeza que deseja aprovar este usuário?'
                  : dialogAcao === 'bloquear'
                  ? 'Tem certeza que deseja bloquear este usuário? Ele não poderá acessar a plataforma até ser desbloqueado.'
                  : 'Tem certeza que deseja banir este usuário? Esta ação não pode ser desfeita facilmente.'}
              </DialogDescription>
            </DialogHeader>

            {dialogAcao === 'perfil' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={dialogUser.avatar || '/placeholder.svg'}
                      alt={dialogUser.nome}
                    />
                    <AvatarFallback>
                      {dialogUser.nome.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{dialogUser.nome}</h3>
                    <p className="text-muted-foreground">{dialogUser.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Cargo</p>
                    <p>{dialogUser.cargo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Empresa</p>
                    <p>{dialogUser.empresa}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Data de Cadastro
                    </p>
                    <p>{dialogUser.dataCadastro}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Último Acesso
                    </p>
                    <p>{dialogUser.ultimoAcesso}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p>
                      <UserBadge status={dialogUser.status} />
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 py-4">
                <Avatar>
                  <AvatarImage
                    src={dialogUser.avatar || '/placeholder.svg'}
                    alt={dialogUser.nome}
                  />
                  <AvatarFallback>
                    {dialogUser.nome.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{dialogUser.nome}</p>
                  <p className="text-sm text-muted-foreground">
                    {dialogUser.email}
                  </p>
                </div>
              </div>
            )}

            <DialogFooter>
              {dialogAcao === 'perfil' ? (
                <Button onClick={() => setdialogUser(null)}>Fechar</Button>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setdialogUser(null)}>
                    Cancelar
                  </Button>
                  <Button
                    variant={
                      dialogAcao === 'aprovar'
                        ? 'default'
                        : dialogAcao === 'bloquear'
                        ? 'outline'
                        : 'destructive'
                    }
                    onClick={() => setdialogUser(null)}
                  >
                    {dialogAcao === 'aprovar' ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Aprovar
                      </>
                    ) : dialogAcao === 'bloquear' ? (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Bloquear
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
  )
}
