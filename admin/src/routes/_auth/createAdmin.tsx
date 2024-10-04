import { createFileRoute } from '@tanstack/react-router'
import '../../assets/style/routes/index.css'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Header3, Paragraph } from '@/components/typography'
import { Fingerprint } from 'lucide-react'

export const Route = createFileRoute('/_auth/createAdmin')({
  component: () => <CreateAdmin />,
})

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

function CreateAdmin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section className="auth">
      <div className="authWrap">
        <div className="authIcon">
          <Fingerprint size={40} />
        </div>
        <div className="authInfo">
          <Header3>Welcome Back</Header3>
          <Paragraph>Let's login into your account.</Paragraph>
        </div>
        <div className="authForm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="formAction">
                <Button type="submit">Login</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
