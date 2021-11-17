const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 5;
    case "wednesday":
      return 6;
    case "thursday":
      return 9;
    case "friday":
      return 10;
    case "saturday":
      return 5;
    case "sunday":
      return 12;
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

function calculateSleepDebt() {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();
  const sleepDept = Math.abs(idealSleepHours - actualSleepHours);

  if (actualSleepHours === idealSleepHours) {
    console.log("Bravo mashina, spal si dostutchno!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `Mashinka, trqbva da spish ${sleepDept} chasa poveche na sedmica!`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `Mnogo spish, ve mashina! Taq sedmica si spal s ${sleepDept} chasa poveche ot kolkot trqbva!`
    );
  }
}

calculateSleepDebt();
