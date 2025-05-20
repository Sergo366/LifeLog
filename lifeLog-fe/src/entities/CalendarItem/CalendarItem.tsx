import React from 'react';
import classes from '@/features/Calendar/styles/styles.module.css';
import { WeekDates } from '@/features/Calendar/types';

export const CalendarItem = ({ day }: { day: WeekDates }) => {
  return (
    <div key={day.id} className={classes.calendarItem}>
      <p>{day.name}</p>
      <p className={classes.dayNumber}>{day.numberOfDay}</p>
      <p>{day.activeDay ? 'Today' : ''}</p>
    </div>
  );
};
