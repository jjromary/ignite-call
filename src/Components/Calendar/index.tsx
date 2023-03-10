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