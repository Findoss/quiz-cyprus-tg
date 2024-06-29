const COUNTDOWN_TIME = {
  hours: [],
  minutes: [],
  seconds: [],
};

for (let i = 5; i < 60; i += 5) {
  COUNTDOWN_TIME.minutes.push({ key: i, text: i, value: i * 60 });
}

export default COUNTDOWN_TIME;
