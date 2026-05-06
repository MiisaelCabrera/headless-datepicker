import type Day from "../types/Day";

export default interface CalendarData {
  year: number;
  month: number;
  days: Day[];
}
