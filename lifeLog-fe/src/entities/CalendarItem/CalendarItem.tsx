import React from 'react';
import classes from '@/features/Calendar/styles/styles.module.css';
import { WeekDates } from '@/features/Calendar/types';

const dayNames: Record<string, string> = {
  '0': 'Monday',
  '1': 'Thursday',
  '2': 'Wednesday',
  '3': 'Thursday',
  '4': 'Friday',
  '5': 'Saturday',
  '6': 'Sunday',
};

export const CalendarItem = ({ day }: { day: WeekDates }) => {
  return (
    <div key={day.id} className={classes.calendarItem}>
      <p>{day.name}</p>
      <p className={classes.dayNumber}>{day.numberOfDay}</p>
      <p>{day.activeDay ? 'Today' : ''}</p>
      <p>{dayNames[`${day.id}`]}</p>
    </div>
  );
};
