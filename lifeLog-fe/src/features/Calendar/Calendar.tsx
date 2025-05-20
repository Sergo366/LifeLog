import React from 'react';
import { CalendarItem } from '@/entities/CalendarItem';
import { getCurrentWeekDates } from '@/features/Calendar/utils';
import classes from './styles/styles.module.css';

export const Calendar = () => {
  const weekDates = getCurrentWeekDates();
  return (
    <div className={classes.calendar}>
      {weekDates.map((day) => (
        <div key={day.id} className={classes.calendarItem}>
          <p>{day.name}</p>
          <p>{day.numberOfDay}</p>
          <p>{day.activeDay ? 'Today' : ''}</p>
        </div>
      ))}
      <CalendarItem />
    </div>
  );
};
