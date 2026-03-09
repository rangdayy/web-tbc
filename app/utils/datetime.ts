export const getArrayOfDatesThisYear = (date: Date) => {
  const year = date.getFullYear();
  const totalDays = (new Date(year + 1, 0, 1).getTime() - new Date(year, 0, 1).getTime()) / (1000 * 60 * 60 * 24);

  return Array.from({ length: totalDays }, (_, i) => getDayAndMonthIndonesia(new Date(year, 0, i + 1)));
};

export const getDayAndMonthIndonesia = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("id-ID", { month: "long" });
  const year = date.getFullYear();

  return { day, month, year };
};

export const getDateStringInIndonesia = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("id-ID", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
