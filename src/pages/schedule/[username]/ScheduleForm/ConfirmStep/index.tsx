import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { CalendarBlank, Clock } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../../../../lib/axios";
import { ConfirmForm, FormActions, FormError, FormHeader } from "./styles";

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa ter no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válico' }),
  observations: z.string().nullable()
})

type ConfirmFormdata = z.infer<typeof confirmFormSchema>

interface ConfirmStepProps {
  schedulingDate: Date;
  onCancelConfirmation: () => void;
}

export function ConfirmStep({ schedulingDate, onCancelConfirmation }: ConfirmStepProps) {

  const router = useRouter()
  const username = String(router.query.username)

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

  async function handleConfirmScheduling(data: ConfirmFormdata) {
    const { name, email, observations } = data

    await api.post(`/users/${username}/schedule`, {
      name,
      email,
      observations,
      date: schedulingDate,
    })

    onCancelConfirmation()

    console.log(data)
  }

  const describeDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY')
  const describeTime = dayjs(schedulingDate).format('HH:mm[h]')

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          {describeDate}
        </Text>
        <Text>
          <Clock />
          {describeTime}
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
        <Button type="button" variant='tertiary' onClick={() => onCancelConfirmation()}>Cancelar</Button>
        <Button type="submit" disabled={isSubmitting}>Confirmar</Button>
      </FormActions>

    </ConfirmForm>
  )
}