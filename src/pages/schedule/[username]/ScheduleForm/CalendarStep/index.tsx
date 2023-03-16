import { useState } from "react";
import { Calendar } from "../../../../../Components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar
        selectedDate={selectedDate}
        onDateSelected={setSelectedDate}
      />

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