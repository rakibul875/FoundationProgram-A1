const getChaseVerdict = (target, scored, ballsLeft) => {
  var runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  var requiredRate = (runsNeeded / ballsLeft) * 6;
  var verdict = "";

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return "Need " + runsNeeded + " runs in " + ballsLeft + " balls | " + verdict;
};
const result = getChaseVerdict(200, 200, 12);
console.log(result);
