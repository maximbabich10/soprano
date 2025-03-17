export const getPeriodName = (time: string) => {
  const hours = parseInt(time.split(":")[0]);
  if (hours >= 6 && hours < 12) return "Утро";
  if (hours >= 12 && hours < 18) return "День";
  if (hours >= 18 && hours < 24) return "Вечер";
  return "Ночь";
};
