import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { CalendarBlank, Clock } from "phosphor-react";
import { ConfirmForm, FormActions, FormHeader } from "./styles";

export function ConfirmStep() {

  function handleConfirmScheduling() { }

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
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
        <TextInput placeholder="Seu nome" />
      </label>

      <label>
        <Text size='sm'>Endereço de e-mail</Text>
        <TextInput type='email' placeholder="seuemail@seuprovedor.com" />
      </label>

      <label>
        <Text size='sm'>Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant='tertiary'>Cancelar</Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>

    </ConfirmForm>
  )
}