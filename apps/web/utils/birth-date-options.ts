import dayjs from 'dayjs';

export const dateOptions = () => {
  const currentYear = dayjs().year();

  const months = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      label: `${month.toString().padStart(2, '0')}`,
      value: `${month.toString().padStart(2, '0')}`,
    };
  });

  const days = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    return {
      label: `${day.toString().padStart(2, '0')}`,
      value: `${day.toString().padStart(2, '0')}`,
    };
  });

  const years = Array.from({ length: 100 }, (_, i) => {
    const year = currentYear - i;
    return { label: `${year}`, value: `${year}` };
  });

  return { months, days, years };
};
