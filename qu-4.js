function getCngFare(distance, isNight, waitingMinutes) {
  if (isNight === undefined) {
    isNight = false;
  }
  if (waitingMinutes === undefined) {
    waitingMinutes = 0;
  }

  var totalFare = 50;

  if (distance > 2) {
    var extraKm = distance - 2;
    totalFare = totalFare + extraKm * 15;
  }

  var waitingCharge = waitingMinutes * 2;
  totalFare = totalFare + waitingCharge;

  if (isNight === true) {
    totalFare = totalFare + totalFare * 0.2;
  }

  return totalFare;
}
const result = getCngFare(5);
console.log(result);
