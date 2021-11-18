const getActualSleepHours = () => {
  return 8 + 5 + 6 + 9 + 10 + 6 + 12;
};

const getIdealSleepHours = (idealHours) => {
  const daysInWeek = 7;
  return idealHours * daysInWeek;
};

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  const sleepDept = Math.abs(idealSleepHours - actualSleepHours);
  let logMessage = "Bravo mashina, spal si dostutchno!";

  if (actualSleepHours < idealSleepHours) {
    logMessage = `Mashinka, trqbva da spish ${sleepDept} chasa poveche na sedmica!`;
  } else if (actualSleepHours > idealSleepHours) {
    logMessage = `Mnogo spish, ve mashina! Taq sedmica si spal s ${sleepDept} chasa poveche ot kolkot trqbva!`;
  }

  console.log(logMessage);
}

calculateSleepDebt();
