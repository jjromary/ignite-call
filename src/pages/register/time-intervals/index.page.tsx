import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { z } from "zod";
import { convertTimeStringToMinutes } from "../../../utils/convert-time-string-to-minutes";
import { getWeekDays } from "../../../utils/get-week-days";
import { Container, Header } from "../styles";
import { FormError, IntervalBox, IntervalContainer, IntervalDay, IntervalInputs, IntervalItem } from "./styles";

const timeIntervalsFormSchema = z.object({
  intervals: z.array(z.object({
    weekday: z.number().min(0).max(6),
    enabled: z.boolean(),
    startTime: z.string(),
    endTime: z.string(),
  }),
  )
    .length(7)
    .transform(intervals => intervals.filter(interval => interval.enabled))
    .refine(intervals => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos 1 dia da semana.'
    })
    .transform((intervals) => {
      return intervals.map((interval) => {
        return {
          weekday: interval.weekday,
          startTimeMinutes: convertTimeStringToMinutes(interval.startTime),
          endTimeMInutes: convertTimeStringToMinutes(interval.endTime),
        }
      })
    })
    .refine(intervals => {
      return intervals.every(interval => interval.endTimeMInutes - 60 >= interval.startTimeMinutes)
    }, {
      message: 'O horário de término deve ser poelo menos 1 hora distante do início.'
    })
  ,
})

type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>
type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>

type TimeIntervalsFormData = z.infer<typeof timeIntervalsFormSchema>

export default function TimeIntervals() {

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(timeIntervalsFormSchema),
    defaultValues: {
      intervals: [
        { weekday: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekday: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ]
    }
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    name: 'intervals',
    control,
  })

  const intervals = watch('intervals')

  async function handleSetTimeIntervlas(data: TimeIntervalsFormData) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá!!</Heading>
        <Text>
          Defina os intervalos de horário que você está disponivel em cada dia da semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervlas)}>
        <IntervalContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={checked => {
                            field.onChange(checked === true)
                          }}
                          checked={field.value}
                        />
                      )
                    }}
                  />
                  <Text>{weekDays[field.weekday]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput size='sm' type='time' step={60} disabled={intervals[index].enabled === false} {...register(`intervals.${index}.startTime`)} />
                  <TextInput size='sm' type='time' step={60} disabled={intervals[index].enabled === false} {...register(`intervals.${index}.endTime`)} />
                </IntervalInputs>
              </IntervalItem>
            )
          })}

        </IntervalContainer>
        {errors.intervals && (
          <FormError size='sm'>
            {errors.intervals.message}
          </FormError>
        )}
        <Button type='submit' disabled={isSubmitting}>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>

    </Container>
  );
}
