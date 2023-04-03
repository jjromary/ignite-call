import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { CalendarBlank, Clock } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ConfirmForm, FormActions, FormError, FormHeader } from "./styles";

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válico' }),
  observations: z.string().nullable()
})

type ConfirmFormdata = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {

  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting,
      errors
    }
  } = useForm<ConfirmFormdata>({
    resolver: zodResolver(confirmFormSchema)
  })

  function handleConfirmScheduling(data: ConfirmFormdata) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          30 de Fevereiro de 2023
        </Text>
        <Text>
          <Clock />
          25:00h
        </Text>
      </FormHeader>

      <label>
        <Text size='sm'>Nome completo</Text>
        <TextInput
          placeholder="Seu nome"
          {...register('name')}
        />
        {errors.name && (
          <FormError size='sm'>{errors.name.message}</FormError>
        )}
      </label>

      <label>
        <Text size='sm'>Endereço de e-mail</Text>
        <TextInput
          type='email'
          placeholder="seuemail@seuprovedor.com"
          {...register('email')}
        />
        {errors.email && (
          <FormError size='sm'>{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size='sm'>Observações</Text>
        <TextArea
          {...register('observations')}
        />
      </label>

      <FormActions>
        <Button type="button" variant='tertiary'>Cancelar</Button>
        <Button type="submit" disabled={isSubmitting}>Confirmar</Button>
      </FormActions>

    </ConfirmForm>
  )
}