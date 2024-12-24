export default function generateCalendarGridInfo(
  year: number,
  month: number
): GridTextInfo[] {
  const { daysOfWeek, days } = getMonthInfo(year, month);

  const daysOfWeekInfo: GridTextInfo[] = daysOfWeek.map((day) => ({
    text: day,
    size: 'F18',
    textTransform: 'capitalize',
    textColor: 'Tiffany',
  }));

  const daysInfo: GridTextInfo[] = days.map((date) => {
    const isWeddingDay: boolean = Number(date) === 8;

    return {
      text: date,
      size: 'F18',
      textColor: isWeddingDay ? 'Charcoal' : 'Tiffany',
      bgColor: isWeddingDay ? 'Tiffany' : undefined,
      shape: isWeddingDay ? 'circle' : undefined,
    };
  });

  return [...daysOfWeekInfo, ...daysInfo];
}

function getMonthInfo(year: number, month: number) {
  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  const firstDayOfWeek = firstDay.toLocaleString('default', {
    weekday: 'short',
  });
  const lastDate = lastDay.getDate();

  const startIndex = daysOfWeek.findIndex((day) => day === firstDayOfWeek);
  const padding: string[] = Array.from({ length: startIndex + 1 }, (_) => '');
  const dateArray: string[] = Array.from({ length: lastDate }, (_, index) =>
    (index + 1).toString()
  );

  const days: string[] = [...padding, ...dateArray];

  return {
    daysOfWeek,
    days,
  };
}
