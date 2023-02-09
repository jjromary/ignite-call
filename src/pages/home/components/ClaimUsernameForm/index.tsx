import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Text, TextInput } from "@ignite-ui/react";
import { useRouter } from 'next/router';
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormAnntotation } from "./styles";

const claimUserNameForSchema = z.object({
  username: z.string()
    .min(3, { message: 'O usuário precisa ter no minimo 3 caracters' })
    .regex(/^([a-z\\\\-]+)$/i, { message: 'O usuário pode ter apenas letras e hifens' })
    .transform((username) => username.toLowerCase()),
})

type claimUsernameFormData = z.infer<typeof claimUserNameForSchema>


export function ClaimUsernameForm() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<claimUsernameFormData>({
    resolver: zodResolver(claimUserNameForSchema),
  })

  const router = useRouter()



  async function handleClaimUsername(data: claimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size='sm'
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button size='sm' type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnntotation>
        <Text>
          {errors.username?.message ? errors.username?.message : 'Digite o nome de usuário desejado'}
        </Text>
      </FormAnntotation>
    </>
  )
}