'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { registerUser } from './actions'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z
  .object({
    name: z.string().min(3, 'O nome deve conter ao menos 3 caracteres'),
    email: z.string().email('Digite um email valido'),
    password: z.string().min(6, 'A senha deve conter ao menos 6 caracteres'),
    repeatPassword: z
      .string()
      .min(6, 'A senha deve conter ao menos 6 caracteres'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'As senhas devem ser iguais',
    path: ['repeatPassword'],
  })

type FormSchema = z.infer<typeof formSchema>

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      repeatPassword: '',
    },
  })

  async function handleRegister({ repeatPassword, ...data }: FormSchema) {
    try {
      setLoading(true)

      await registerUser(data)
      toast('Cadastro realizado com sucesso!')

      form.reset()
      router.replace('/login')
    } catch (error) {
      toast('Ocorreu um erro inesperado', {
        description: 'Tente novamente mais tarde',
      })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={'flex flex-col gap-6 m-auto'}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Registrar-se</CardTitle>
              <CardDescription>
                Registre-se para utilizar a plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleRegister)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Como quer ser chamado"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="usuario@email.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="repeatPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Repita a senha</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" loading={loading}>
                    Cadastrar-se
                  </Button>
                  <div>
                    <Separator />

                    <div className="text-center text-sm mt-2">
                      Ja possui uma conta?{' '}
                      <Link
                        href="/login"
                        className="underline underline-offset-4"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
