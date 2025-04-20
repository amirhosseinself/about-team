export const toPersianDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("fa-IR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
