import React from 'react';
import TextBox from '@/components/molecules/TextBox';
import GridText from '@/components/organisms/GridText';
import generateCalendarGridInfo from '@/utils/generateCalendar';

export default function Calendar() {
  const calendarGridInfos = generateCalendarGridInfo(2025, 4);

  return (
    <div>
      <TextBox size="F24" textColor="Tiffany">{`April`}</TextBox>
      <GridText columns={7} textInfos={calendarGridInfos} />
    </div>
  );
}
