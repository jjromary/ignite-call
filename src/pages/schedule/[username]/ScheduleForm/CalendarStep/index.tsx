import dayjs from "dayjs";
import { useState } from "react";
import { Calendar } from "../../../../../Components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const detailsMonth = selectedDate ? dayjs(selectedDate).format('DD [ de ]MMMM') : null


  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar
        selectedDate={selectedDate}
        onDateSelected={setSelectedDate}
      />

      {isDateSelected &&
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{detailsMonth}</span>
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