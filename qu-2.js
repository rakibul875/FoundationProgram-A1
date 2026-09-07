const getDayType = (dayName) => {
  var formattedDay = dayName.toLowerCase();

  switch (formattedDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
};
const result = getDayType("Thursday");
console.log(result);
