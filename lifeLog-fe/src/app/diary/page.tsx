'use client';
import { Calendar } from '@/features/Calendar';
import React from 'react';
import { RichTextEditor } from '@/shared/components/RichTextEditor';

const DiaryPage = () => {
  return (
    <div className="container">
      <Calendar />
      <RichTextEditor />
    </div>
  );
};

export default DiaryPage;
