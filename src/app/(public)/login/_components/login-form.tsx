'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RedirectType, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type FormData = z.infer<typeof formSchema>

export const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLogin(data: FormData) {
    try {
      setLoading(true)
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      })

      if (res?.error) {
        toast('email ou senha incorretos')
      } else if (res?.ok) {
        const callbackUrl = searchParams.get('from') || '/home'

        return router.replace(callbackUrl as RedirectType)
      }
    } catch (error) {
      toast('Algo deu errado, tente novamente mais tarde')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-8">
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
              <div className="flex items-center justify-between">
                <FormLabel>Senha</FormLabel>
                <Link href="#" className="text-xs ">
                  Esqueci a senha
                </Link>
              </div>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" loading={loading}>
          Login
        </Button>
        <div>
          <Separator />

          <div className="text-center text-sm mt-2">
            Não possui uma conta?{' '}
            <Link href="/register" className="underline underline-offset-4">
              Cadastrar-se
            </Link>
          </div>
        </div>
      </form>
    </Form>
  )
}
