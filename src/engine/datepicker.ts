import type Day from "../types/Day";
import type CalendarData from "../types/CalendarData";

export default class DatePickerEngine {
  private currentDate: Date;
  private cache: CalendarData | null = null;

  constructor(initialDate: Date) {
    this.currentDate = initialDate;
  }

  private invalidateCache() {
    this.cache = null;
  }

  public setCurrentDate(date: Date) {
    this.currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    this.invalidateCache();
  }

  public getCalendar(): CalendarData {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    if (this.cache && this.cache.year === year && this.cache.month === month) {
      return this.cache;
    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days: Day[] = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      const prevDate = new Date(year, month, 1 - i);
      days.push({
        date: prevDate,
        day: prevDate.getDate(),
        currentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        day: i,
        currentMonth: true,
      });
    }

    let nextMonthDay = 1;
    while (days.length < 42) {
      days.push({
        date: new Date(year, month + 1, nextMonthDay),
        day: nextMonthDay++,
        currentMonth: false,
      });
    }

    this.cache = {
      days,
      month,
      year,
    };

    return this.cache;
  }

  public nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1,
    );
    this.invalidateCache();
  }

  public previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1,
    );
    this.invalidateCache();
  }
}
