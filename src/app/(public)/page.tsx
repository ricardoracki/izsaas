import {
  ArrowRight,
  BarChart,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Cpu,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Share2,
  Star,
  Twitter,
  Users,
  Youtube,
  Zap,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth ">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">IZSaaS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#recursos"
              className="text-sm font-medium hover:text-primary"
            >
              Recursos
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm font-medium hover:text-primary"
            >
              Como Funciona
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium hover:text-primary"
            >
              Depoimentos
            </Link>
            <Link
              href="#planos"
              className="text-sm font-medium hover:text-primary"
            >
              Planos
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-primary hidden sm:block"
            >
              Entrar
            </Link>
            <Button asChild>
              <Link href="/register">Começar Grátis</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 scroll-smooth">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    A Plataforma de Conhecimento em Automação Industrial
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Aprenda, compartilhe e evolua com a maior comunidade de
                    profissionais de automação industrial do Brasil. Tutoriais,
                    recursos e networking em um só lugar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/cadastro">
                      Começar Agora
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#como-funciona">Saiba Mais</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>RA</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-muted-foreground">
                    Junte-se a{' '}
                    <span className="font-medium text-foreground">+5.000</span>{' '}
                    profissionais
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Dashboard da plataforma"
                    fill
                    className="object-contain rounded-lg shadow-2xl border"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-t border-b bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">
                  Utilizado por profissionais das maiores empresas
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 grayscale opacity-70">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Logo"
                  width={120}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Logo"
                  width={120}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Logo"
                  width={120}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Logo"
                  width={120}
                  height={40}
                />
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Logo"
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo que você precisa para dominar a automação industrial
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma reúne conteúdo de qualidade, ferramentas de
                  compartilhamento e uma comunidade ativa de profissionais.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Tutoriais Especializados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acesse centenas de tutoriais detalhados sobre PLCs, SCADA,
                    redes industriais e muito mais.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Compartilhamento Simplificado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Compartilhe conhecimento com sua equipe através de links
                    temporários e acompanhe os acessos.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Comunidade Ativa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conecte-se com outros profissionais, troque experiências e
                    resolva problemas em conjunto.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Conteúdo Atualizado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Mantenha-se atualizado com as últimas tendências e
                    tecnologias em automação industrial.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Métricas e Análises</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acompanhe o desempenho dos seus conteúdos compartilhados com
                    estatísticas detalhadas.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="mb-2 rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Acesso Multiplataforma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acesse a plataforma de qualquer dispositivo, a qualquer hora
                    e em qualquer lugar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="como-funciona"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Como Funciona
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Três passos simples para começar
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comece a usar nossa plataforma em minutos e aproveite todos os
                  recursos disponíveis.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Crie sua conta</h3>
                  <p className="text-muted-foreground">
                    Registre-se gratuitamente e preencha seu perfil profissional
                    para começar.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Explore os tutoriais</h3>
                  <p className="text-muted-foreground">
                    Acesse nossa biblioteca de conteúdos especializados em
                    automação industrial.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">
                    Compartilhe conhecimento
                  </h3>
                  <p className="text-muted-foreground">
                    Crie links de compartilhamento e acompanhe o impacto do seu
                    conhecimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Button size="lg" asChild>
                <Link href="/cadastro">
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  O que nossos usuários dizem
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja como nossa plataforma tem ajudado profissionais de
                  automação industrial em todo o Brasil.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Carlos Mendes"
                      />
                      <AvatarFallback>CM</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Carlos Mendes</CardTitle>
                      <CardDescription>
                        Engenheiro de Automação, TechAutomation
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Os tutoriais sobre PLCs Siemens me ajudaram a resolver
                    problemas complexos que enfrentávamos na fábrica. Economizei
                    semanas de trabalho!"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Ana Silva"
                      />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Ana Silva</CardTitle>
                      <CardDescription>
                        Técnica em Eletrônica, ElectroSystems
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "A função de compartilhamento de links é fantástica! Consigo
                    enviar tutoriais específicos para minha equipe e acompanhar
                    quem realmente está estudando."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Roberto Almeida"
                      />
                      <AvatarFallback>RA</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        Roberto Almeida
                      </CardTitle>
                      <CardDescription>
                        Programador PLC, ControlTech
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "A comunidade é incrível! Postei uma dúvida sobre
                    programação Ladder e em menos de uma hora já tinha várias
                    soluções diferentes."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="planos"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Planos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Escolha o plano ideal para você
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Temos opções para profissionais individuais e equipes de todos
                  os tamanhos.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <Tabs defaultValue="mensal" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="mensal">Mensal</TabsTrigger>
                    <TabsTrigger value="anual">
                      Anual (20% de desconto)
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="mensal">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Gratuito</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-bold">
                          R$ 0
                          <span className="ml-1 text-sm font-medium text-muted-foreground">
                            /mês
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Acesso a tutoriais básicos</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Perfil na comunidade</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>3 links de compartilhamento</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline" asChild>
                          <Link href="/cadastro">Começar Grátis</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-none shadow-md relative">
                      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Mais Popular
                      </div>
                      <CardHeader>
                        <CardTitle>Profissional</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-bold">
                          R$ 49
                          <span className="ml-1 text-sm font-medium text-muted-foreground">
                            /mês
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Acesso a todos os tutoriais</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Perfil destacado na comunidade</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>50 links de compartilhamento</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Estatísticas detalhadas</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Suporte prioritário</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/cadastro">Assinar Agora</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Empresarial</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-bold">
                          R$ 149
                          <span className="ml-1 text-sm font-medium text-muted-foreground">
                            /mês
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Tudo do plano Profissional</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Até 5 usuários</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Links de compartilhamento ilimitados</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Área privada para equipe</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Gerenciamento de usuários</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Suporte dedicado</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline" asChild>
                          <Link href="/contato">Falar com Vendas</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="anual">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Gratuito</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-bold">
                          R$ 0
                          <span className="ml-1 text-sm font-medium text-muted-foreground">
                            /ano
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Acesso a tutoriais básicos</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Perfil na comunidade</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>3 links de compartilhamento</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline" asChild>
                          <Link href="/cadastro">Começar Grátis</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-none shadow-md relative">
                      <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        Mais Popular
                      </div>
                      <CardHeader>
                        <CardTitle>Profissional</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-bold">
                          R$ 39
                          <span className="ml-1 text-sm font-medium text-muted-foreground">
                            /mês
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Cobrado anualmente como R$ 468
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Acesso a todos os tutoriais</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Perfil destacado na comunidade</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>50 links de compartilhamento</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Estatísticas detalhadas</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Suporte prioritário</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/cadastro">Assinar Agora</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Empresarial</CardTitle>
                        <div className="mt-4 flex items-baseline text-5xl font-bold">
                          R$ 119
                          <span className="ml-1 text-sm font-medium text-muted-foreground">
                            /mês
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Cobrado anualmente como R$ 1.428
                        </p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Tudo do plano Profissional</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Até 5 usuários</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Links de compartilhamento ilimitados</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Área privada para equipe</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Gerenciamento de usuários</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Suporte dedicado</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="outline" asChild>
                          <Link href="/contato">Falar com Vendas</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Perguntas Frequentes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Respostas para suas dúvidas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tudo o que você precisa saber sobre nossa plataforma.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12 grid gap-4">
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>
                    Como funciona o compartilhamento de links?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Você pode criar links temporários para compartilhar
                    tutoriais específicos com sua equipe ou colegas. Esses links
                    podem ter uma data de expiração e você pode acompanhar
                    quantas vezes foram acessados e quantos agradecimentos
                    receberam.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>
                    Posso cancelar minha assinatura a qualquer momento?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim, você pode cancelar sua assinatura a qualquer momento.
                    Se cancelar, você continuará tendo acesso até o final do
                    período pago. Não fazemos reembolsos proporcionais para
                    períodos parciais.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>
                    Como posso contribuir com conteúdo para a plataforma?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Usuários dos planos Profissional e Empresarial podem enviar
                    tutoriais para revisão. Após aprovação pela nossa equipe, o
                    conteúdo é publicado na plataforma e você recebe créditos
                    por sua contribuição.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>
                    Vocês oferecem descontos para instituições de ensino?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim, oferecemos planos especiais para instituições de
                    ensino. Entre em contato com nossa equipe de vendas para
                    mais informações sobre nossos programas educacionais.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle>
                    O que acontece com meus links compartilhados se eu cancelar
                    minha assinatura?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Se você cancelar sua assinatura, seus links compartilhados
                    permanecerão ativos até sua data de expiração original. No
                    entanto, você não poderá criar novos links até renovar sua
                    assinatura.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Pronto para elevar seu conhecimento em automação industrial?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Junte-se a milhares de profissionais que já estão
                  transformando sua carreira com a AutoEdu.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/cadastro">
                    Começar Gratuitamente
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground"
                  asChild
                >
                  <Link href="/contato">Falar com um Especialista</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Fique por dentro das novidades
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Assine nossa newsletter e receba dicas, tutoriais e
                    novidades sobre automação industrial diretamente na sua
                    caixa de entrada.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Input type="email" placeholder="Seu melhor email" />
                  <Button>Inscrever-se</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Ao se inscrever, você concorda com nossa{' '}
                  <Link
                    href="/politica-privacidade"
                    className="underline underline-offset-2"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:py-8 lg:grid-cols-5">
            <div className="flex flex-col gap-2 lg:col-span-2">
              <div className="flex items-center gap-2">
                <Cpu className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">AutoEdu</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A plataforma de conhecimento em automação industrial que conecta
                profissionais e impulsiona carreiras.
              </p>
              <div className="flex gap-4 mt-2">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Plataforma</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Tutoriais
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Comunidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Compartilhamento
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Recursos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Empresa</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Sobre nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Carreiras
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Imprensa
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Contato</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      contato@autoedu.com.br
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground flex items-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      (11) 3456-7890
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground flex items-center"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      São Paulo, SP
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t py-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AutoEdu. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
