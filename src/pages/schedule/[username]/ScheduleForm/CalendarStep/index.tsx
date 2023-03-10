import { Calendar } from "../../../../../Components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected &&
        <TimePicker>
          <TimePickerHeader>
            Sabado-Feira <span>30 de Fevereiro</span>
          </TimePickerHeader>
          <TimePickerList>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
            <TimePickerItem>25:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      }

    </Container>

  )
}