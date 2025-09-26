export const timeOptions = () => {
  const AM_PM = [
    { label: 'AM', value: 'AM' },
    { label: 'PM', value: 'PM' },
  ];

  const HOURS = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 1;
    return {
      label: hour.toString(),
      value: hour.toString(),
    };
  });

  const MINUTES = Array.from({ length: 60 }, (_, i) => {
    const minute = i + 1;
    return {
      label: `${minute.toString().padStart(2, '0')}`,
      value: minute.toString(),
    };
  });
  return { AM_PM, HOURS, MINUTES };
};
