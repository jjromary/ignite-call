import { CaretLeft, CaretRight } from "phosphor-react";
import { getWeekDays } from "../../utils/get-week-days";
import { CalendarActions, CalendarBody, CalendarContainer, CalendarDay, CalendarHeader, CalendarTitle } from "./styles";

export function Calendar() {

  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Março <span>2023</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map(weekday =>
              <th key={weekday}>{weekday}</th>)
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><CalendarDay disabled>01</CalendarDay></td>
            <td><CalendarDay>02</CalendarDay></td>
            <td><CalendarDay>03</CalendarDay></td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}