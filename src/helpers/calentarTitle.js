const generateMonthTitle = (date) => {
   const month = new Date(date).toLocaleString("en-US", {
      month: "long",
   });
   const year = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
   })

   return `${month} ${year}`;
}

const generateWeekTitle = (date) => {

   const options = { month: "short", day: "numeric" };

   const startOfWeek = new Date(date);
   startOfWeek.setDate(date.getDate() - date.getDay());
   startOfWeek.setHours(0, 0, 0, 0);

   const endOfWeek = new Date(startOfWeek);
   endOfWeek.setDate(startOfWeek.getDate() + 6);
   endOfWeek.setHours(23, 59, 59, 999);


   const startFormatted = startOfWeek.toLocaleDateString("en-US", options);
   const endFormatted = endOfWeek.toLocaleDateString("en-US", options);

   return `${startFormatted} - ${endFormatted}`;
}

const generateDayTitle = (date) => {
   return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
   }).replace(',', '');
}

export const generateCalendarTitle = (view, date) => {
   switch (view) {
      case 'month': {
         return generateMonthTitle(date)
      }
      case 'week': {
         return generateWeekTitle(date)
      }
      case 'day': {
         return generateDayTitle(date)
      }
      default:
         return generateMonthTitle(date)
   }
}