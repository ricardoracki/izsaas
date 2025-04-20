'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Calendar,
  CheckCircle,
  Clock,
  Copy,
  ExternalLink,
  Eye,
  Filter,
  LinkIcon,
  MoreHorizontal,
  RefreshCw,
  Search,
  ThumbsUp,
  Trash2,
  User,
  XCircle,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

// Dados fictícios de links de compartilhamento
const linksCompartilhamento = [
  {
    id: 'link-001',
    tutorialId: 1,
    tutorialTitulo: 'Introdução a PLCs Siemens S7-1200',
    criador: {
      id: 1,
      nome: 'Carlos Mendes',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '10/04/2024',
    dataExpiracao: '10/05/2024',
    acessos: 127,
    agradecimentos: 43,
    status: 'ativo',
    url: 'https://exemplo.com/s/abc123',
  },
  {
    id: 'link-002',
    tutorialId: 5,
    tutorialTitulo: 'Redes Industriais: Profinet vs EtherNet/IP',
    criador: {
      id: 4,
      nome: 'Juliana Costa',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '05/04/2024',
    dataExpiracao: '05/05/2024',
    acessos: 89,
    agradecimentos: 21,
    status: 'ativo',
    url: 'https://exemplo.com/s/def456',
  },
  {
    id: 'link-003',
    tutorialId: 11,
    tutorialTitulo: 'Robótica Colaborativa: Programação e Segurança',
    criador: {
      id: 2,
      nome: 'Ana Silva',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '01/04/2024',
    dataExpiracao: '01/05/2024',
    acessos: 215,
    agradecimentos: 67,
    status: 'ativo',
    url: 'https://exemplo.com/s/ghi789',
  },
  {
    id: 'link-004',
    tutorialId: 3,
    tutorialTitulo: 'Programação Ladder para Sistemas de Segurança',
    criador: {
      id: 7,
      nome: 'Paulo Santos',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '25/03/2024',
    dataExpiracao: '25/04/2024',
    acessos: 56,
    agradecimentos: 12,
    status: 'expirando',
    url: 'https://exemplo.com/s/jkl012',
  },
  {
    id: 'link-005',
    tutorialId: 15,
    tutorialTitulo: 'Segurança Cibernética em Sistemas de Automação',
    criador: {
      id: 8,
      nome: 'Carla Rodrigues',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '15/03/2024',
    dataExpiracao: '15/04/2024',
    acessos: 178,
    agradecimentos: 54,
    status: 'expirado',
    url: 'https://exemplo.com/s/mno345',
  },
  {
    id: 'link-006',
    tutorialId: 2,
    tutorialTitulo:
      'Configuração de Sensores Industriais para Monitoramento Remoto',
    criador: {
      id: 3,
      nome: 'Roberto Almeida',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '20/03/2024',
    dataExpiracao: '20/04/2024',
    acessos: 92,
    agradecimentos: 31,
    status: 'expirado',
    url: 'https://exemplo.com/s/pqr678',
  },
  {
    id: 'link-007',
    tutorialId: 8,
    tutorialTitulo: 'Implementação de IIoT em Fábricas Tradicionais',
    criador: {
      id: 1,
      nome: 'Carlos Mendes',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '12/04/2024',
    dataExpiracao: '12/05/2024',
    acessos: 45,
    agradecimentos: 8,
    status: 'ativo',
    url: 'https://exemplo.com/s/stu901',
  },
  {
    id: 'link-008',
    tutorialId: 14,
    tutorialTitulo: 'Machine Learning Aplicado à Manutenção Preditiva',
    criador: {
      id: 6,
      nome: 'Fernanda Lima',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    dataCriacao: '08/04/2024',
    dataExpiracao: '08/05/2024',
    acessos: 132,
    agradecimentos: 47,
    status: 'ativo',
    url: 'https://exemplo.com/s/vwx234',
  },
]

export default function LinksCompartilhamento() {
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState('todos')
  const [ordenacao, setOrdenacao] = useState('recentes')
  const [visualizacao, setVisualizacao] = useState('todos')

  // Calcular estatísticas
  const totalLinks = linksCompartilhamento.length
  const linksAtivos = linksCompartilhamento.filter(
    (link) => link.status === 'ativo'
  ).length
  const linksExpirando = linksCompartilhamento.filter(
    (link) => link.status === 'expirando'
  ).length
  const linksExpirados = linksCompartilhamento.filter(
    (link) => link.status === 'expirado'
  ).length
  const totalAcessos = linksCompartilhamento.reduce(
    (sum, link) => sum + link.acessos,
    0
  )
  const totalAgradecimentos = linksCompartilhamento.reduce(
    (sum, link) => sum + link.agradecimentos,
    0
  )

  // Filtrar links com base na busca e no filtro de status
  let linksFiltrados = linksCompartilhamento.filter(
    (link) =>
      (link.tutorialTitulo.toLowerCase().includes(busca.toLowerCase()) ||
        link.criador.nome.toLowerCase().includes(busca.toLowerCase())) &&
      (filtroStatus === 'todos' || link.status === filtroStatus)
  )

  // Filtrar por visualização (tab)
  if (visualizacao !== 'todos') {
    linksFiltrados = linksFiltrados.filter(
      (link) => link.status === visualizacao
    )
  }

  // Ordenar links
  linksFiltrados = [...linksFiltrados].sort((a, b) => {
    switch (ordenacao) {
      case 'recentes':
        return (
          new Date(b.dataCriacao.split('/').reverse().join('-')).getTime() -
          new Date(a.dataCriacao.split('/').reverse().join('-')).getTime()
        )
      case 'antigos':
        return (
          new Date(a.dataCriacao.split('/').reverse().join('-')).getTime() -
          new Date(b.dataCriacao.split('/').reverse().join('-')).getTime()
        )
      case 'mais_acessados':
        return b.acessos - a.acessos
      case 'mais_agradecidos':
        return b.agradecimentos - a.agradecimentos
      default:
        return 0
    }
  })

  // Renderizar o badge de status com a cor apropriada
  const renderizarStatus = (status: string) => {
    switch (status) {
      case 'ativo':
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            <CheckCircle className="h-3 w-3 mr-1" />
            Ativo
          </Badge>
        )
      case 'expirando':
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-200"
          >
            <Clock className="h-3 w-3 mr-1" />
            Expirando
          </Badge>
        )
      case 'expirado':
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200"
          >
            <XCircle className="h-3 w-3 mr-1" />
            Expirado
          </Badge>
        )
      default:
        return (
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 border-gray-200"
          >
            Desconhecido
          </Badge>
        )
    }
  }

  // Função para copiar link
  const copiarLink = (url: string) => {
    navigator.clipboard.writeText(url)
    // Aqui você poderia adicionar uma notificação de sucesso
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <LinkIcon className="h-6 w-6" />
          Links de Compartilhamento
        </h1>
        <Button>
          <LinkIcon className="h-4 w-4 mr-2" />
          Criar Novo Link
        </Button>
      </div>

      {/* Cards de estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLinks}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {linksAtivos} ativos, {linksExpirando} expirando, {linksExpirados}{' '}
              expirados
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Acessos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAcessos}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Média de {Math.round(totalAcessos / totalLinks)} por link
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Agradecimentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAgradecimentos}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Taxa de conversão:{' '}
              {Math.round((totalAgradecimentos / totalAcessos) * 100)}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Link Mais Popular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold truncate">
              {
                linksCompartilhamento.sort((a, b) => b.acessos - a.acessos)[0]
                  ?.tutorialTitulo
              }
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {
                linksCompartilhamento.sort((a, b) => b.acessos - a.acessos)[0]
                  ?.acessos
              }{' '}
              acessos
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border shadow-sm">
        {/* Barra de ferramentas */}
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar por título ou criador..."
              className="pl-9"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={filtroStatus} onValueChange={setFiltroStatus}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="ativo">Ativos</SelectItem>
                <SelectItem value="expirando">Expirando</SelectItem>
                <SelectItem value="expirado">Expirados</SelectItem>
              </SelectContent>
            </Select>
            <Select value={ordenacao} onValueChange={setOrdenacao}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais recentes</SelectItem>
                <SelectItem value="antigos">Mais antigos</SelectItem>
                <SelectItem value="mais_acessados">Mais acessados</SelectItem>
                <SelectItem value="mais_agradecidos">
                  Mais agradecidos
                </SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="todos"
          value={visualizacao}
          onValueChange={setVisualizacao}
        >
          <div className="px-4 pt-2">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="ativo">Ativos</TabsTrigger>
              <TabsTrigger value="expirando">Expirando</TabsTrigger>
              <TabsTrigger value="expirado">Expirados</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="todos" className="m-0">
            <LinksTable
              links={linksFiltrados}
              renderizarStatus={renderizarStatus}
              copiarLink={copiarLink}
            />
          </TabsContent>
          <TabsContent value="ativo" className="m-0">
            <LinksTable
              links={linksFiltrados}
              renderizarStatus={renderizarStatus}
              copiarLink={copiarLink}
            />
          </TabsContent>
          <TabsContent value="expirando" className="m-0">
            <LinksTable
              links={linksFiltrados}
              renderizarStatus={renderizarStatus}
              copiarLink={copiarLink}
            />
          </TabsContent>
          <TabsContent value="expirado" className="m-0">
            <LinksTable
              links={linksFiltrados}
              renderizarStatus={renderizarStatus}
              copiarLink={copiarLink}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

// Componente de tabela de links para reutilização
function LinksTable({ links, renderizarStatus, copiarLink }: any) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 font-medium">Tutorial</th>
            <th className="text-left py-3 px-4 font-medium">Criado por</th>
            <th className="text-left py-3 px-4 font-medium">
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                Acessos
              </div>
            </th>
            <th className="text-left py-3 px-4 font-medium">
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Agradecimentos
              </div>
            </th>
            <th className="text-left py-3 px-4 font-medium">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Validade
              </div>
            </th>
            <th className="text-left py-3 px-4 font-medium">Status</th>
            <th className="text-right py-3 px-4 font-medium">Ações</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link: any) => (
            <tr key={link.id} className="border-b hover:bg-gray-50/10">
              <td className="py-3 px-4">
                <div className="font-medium line-clamp-1">
                  {link.tutorialTitulo}
                </div>
                <div className="text-xs text-muted-foreground truncate max-w-[250px]">
                  {link.url}
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={link.criador.avatar || '/placeholder.svg'}
                      alt={link.criador.nome}
                    />
                    <AvatarFallback>
                      {link.criador.nome.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{link.criador.nome}</span>
                </div>
              </td>
              <td className="py-3 px-4">{link.acessos}</td>
              <td className="py-3 px-4">
                <div className="flex items-center">
                  {link.agradecimentos}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({Math.round((link.agradecimentos / link.acessos) * 100)}%)
                  </span>
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Criado: {link.dataCriacao}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Expira: {link.dataExpiracao}
                  </span>
                </div>
              </td>
              <td className="py-3 px-4">{renderizarStatus(link.status)}</td>
              <td className="py-3 px-4 text-right">
                <div className="flex items-center justify-end gap-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => copiarLink(link.url)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copiar link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Abrir link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Abrir menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Renovar link
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <User className="h-4 w-4 mr-2" />
                        Ver acessos detalhados
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Desativar link
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </td>
            </tr>
          ))}

          {links.length === 0 && (
            <tr>
              <td
                colSpan={7}
                className="text-center py-8 text-muted-foreground"
              >
                Nenhum link encontrado com os filtros atuais
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
