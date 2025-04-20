'use client'

import {
  BarChart,
  Book,
  Cable,
  Clock,
  Cog,
  Cpu,
  Eye,
  Gauge,
  Plus,
  BotIcon as Robot,
  Search,
  Settings,
  ThumbsUp,
  User,
  Wrench,
  Zap,
} from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'

// Dados fictícios de tutoriais
const tutoriais = [
  {
    id: 1,
    titulo: 'Introdução a PLCs Siemens S7-1200',
    autor: 'Carlos Mendes',
    agradecimentos: 342,
    recente: true,
    maisVisto: false,
    icon: Cpu,
  },
  {
    id: 2,
    titulo: 'Configuração de Sensores Industriais para Monitoramento Remoto',
    autor: 'Ana Silva',
    agradecimentos: 187,
    recente: false,
    maisVisto: true,
    icon: Gauge,
  },
  {
    id: 3,
    titulo: 'Programação Ladder para Sistemas de Segurança',
    autor: 'Roberto Almeida',
    agradecimentos: 256,
    recente: false,
    maisVisto: true,
    icon: Settings,
  },
  {
    id: 4,
    titulo: 'Integração de Sistemas SCADA com Banco de Dados',
    autor: 'Juliana Costa',
    agradecimentos: 129,
    recente: true,
    maisVisto: false,
    icon: BarChart,
  },
  {
    id: 5,
    titulo: 'Redes Industriais: Profinet vs EtherNet/IP',
    autor: 'Marcos Oliveira',
    agradecimentos: 421,
    recente: false,
    maisVisto: true,
    icon: Cable,
  },
  {
    id: 6,
    titulo: 'Automação com Arduino em Pequenas Indústrias',
    autor: 'Fernanda Lima',
    agradecimentos: 198,
    recente: true,
    maisVisto: false,
    icon: Zap,
  },
  {
    id: 7,
    titulo: 'Manutenção Preventiva em Sistemas Automatizados',
    autor: 'Paulo Santos',
    agradecimentos: 276,
    recente: false,
    maisVisto: false,
    icon: Wrench,
  },
  {
    id: 8,
    titulo: 'Implementação de IIoT em Fábricas Tradicionais',
    autor: 'Carla Rodrigues',
    agradecimentos: 312,
    recente: true,
    maisVisto: false,
    icon: Cog,
  },
  {
    id: 9,
    titulo: 'Controle PID para Processos Industriais',
    autor: 'Ricardo Ferreira',
    agradecimentos: 189,
    recente: false,
    maisVisto: false,
    icon: Settings,
  },
  {
    id: 10,
    titulo: 'Visão Computacional na Inspeção de Qualidade',
    autor: 'Luciana Martins',
    agradecimentos: 367,
    recente: false,
    maisVisto: true,
    icon: Eye,
  },
  {
    id: 11,
    titulo: 'Robótica Colaborativa: Programação e Segurança',
    autor: 'Daniel Souza',
    agradecimentos: 245,
    recente: true,
    maisVisto: false,
    icon: Robot,
  },
  {
    id: 12,
    titulo: 'Sistemas Supervisórios com Ignition SCADA',
    autor: 'Beatriz Campos',
    agradecimentos: 178,
    recente: false,
    maisVisto: false,
    icon: BarChart,
  },
  {
    id: 13,
    titulo: 'Protocolos de Comunicação OPC UA',
    autor: 'Henrique Dias',
    agradecimentos: 203,
    recente: false,
    maisVisto: true,
    icon: Cable,
  },
  {
    id: 14,
    titulo: 'Machine Learning Aplicado à Manutenção Preditiva',
    autor: 'Tatiana Nunes',
    agradecimentos: 289,
    recente: true,
    maisVisto: false,
    icon: Cpu,
  },
  {
    id: 15,
    titulo: 'Segurança Cibernética em Sistemas de Automação',
    autor: 'Gabriel Moreira',
    agradecimentos: 356,
    recente: false,
    maisVisto: true,
    icon: Zap,
  },
]

export default function TutorialList() {
  const [busca, setBusca] = useState('')

  const tutoriaisFiltrados = tutoriais.filter(
    (tutorial) =>
      tutorial.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      tutorial.autor.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Book className="h-6 w-6" />
          Tutoriais
        </h1>
        <Button asChild variant="outline">
          <Link href="/app/new">
            <Plus />
            Criar tutorial
          </Link>
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Buscar tutoriais ou autores..."
          className="pl-10"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="space-y-4 ">
        {tutoriaisFiltrados.map((tutorial) => {
          return (
            <div
              key={tutorial.id}
              className="p-4 border rounded-lg hover:bg-muted-foreground transition-colors cursor-pointer flex items-start gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{tutorial.titulo}</h3>
                  {tutorial.recente && (
                    <Badge variant="secondary" className="">
                      <Clock className="h-3 w-3 mr-1" />
                      Recente
                    </Badge>
                  )}
                  {tutorial.maisVisto && (
                    <Badge variant="secondary" className="">
                      <Eye className="h-3 w-3 mr-1" />
                      Mais visto
                    </Badge>
                  )}
                </div>

                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <div className="flex items-center mr-4">
                    <User className="h-3 w-3 mr-1" />
                    {tutorial.autor}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    {tutorial.agradecimentos} agradecimentos
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {tutoriaisFiltrados.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhum tutorial encontrado para "{busca}"
          </div>
        )}
      </div>
    </>
  )
}
