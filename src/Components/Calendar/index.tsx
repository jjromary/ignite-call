import dayjs from "dayjs";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useMemo, useState } from "react";
import { getWeekDays } from "../../utils/get-week-days";
import { CalendarActions, CalendarBody, CalendarContainer, CalendarDay, CalendarHeader, CalendarTitle } from "./styles";

export function Calendar() {

  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')


  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const previousMonthDate = currentDate.add(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  const calendarWeeks = useMemo(() => {

    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth()
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstDayWeek = currentDate.get('day')

    const previousMonsthFillArray = Array.from({
      length: firstDayWeek
    }).map((_, i) => {
      return currentDate.subtract(i + 1, 'day')
    }).reverse()

    return [...previousMonsthFillArray, ...daysInMonthArray]
  }, [currentDate])

  console.log(calendarWeeks)





  const shortWeekDays = getWeekDays({ short: true })
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title='Previous Month'>
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title='Next Month'>
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
            <td><CalendarDay>01</CalendarDay></td>
            <td><CalendarDay>02</CalendarDay></td>
            <td><CalendarDay disabled>03</CalendarDay></td>
          </tr>
          <tr>
            <td><CalendarDay disabled>04</CalendarDay></td>
            <td><CalendarDay>05</CalendarDay></td>
            <td><CalendarDay>06</CalendarDay></td>
            <td><CalendarDay>07</CalendarDay></td>
            <td><CalendarDay>08</CalendarDay></td>
            <td><CalendarDay>09</CalendarDay></td>
            <td><CalendarDay disabled>10</CalendarDay></td>
          </tr>
          <tr>
            <td><CalendarDay disabled>11</CalendarDay></td>
            <td><CalendarDay>12</CalendarDay></td>
            <td><CalendarDay>13</CalendarDay></td>
            <td><CalendarDay>14</CalendarDay></td>
            <td><CalendarDay>15</CalendarDay></td>
            <td><CalendarDay>16</CalendarDay></td>
            <td><CalendarDay disabled>17</CalendarDay></td>
          </tr>
          <tr>
            <td><CalendarDay disabled>18</CalendarDay></td>
            <td><CalendarDay>19</CalendarDay></td>
            <td><CalendarDay>20</CalendarDay></td>
            <td><CalendarDay>21</CalendarDay></td>
            <td><CalendarDay>22</CalendarDay></td>
            <td><CalendarDay>23</CalendarDay></td>
            <td><CalendarDay disabled>24</CalendarDay></td>
          </tr>
          <tr>
            <td><CalendarDay disabled>25</CalendarDay></td>
            <td><CalendarDay>26</CalendarDay></td>
            <td><CalendarDay>27</CalendarDay></td>
            <td><CalendarDay>28</CalendarDay></td>
            <td><CalendarDay>29</CalendarDay></td>
            <td><CalendarDay>30</CalendarDay></td>
            <td><CalendarDay disabled>31</CalendarDay></td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}