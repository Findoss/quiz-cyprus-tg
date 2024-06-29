const timeConverter = (milliseconds: number) => {
  if (
    milliseconds === null ||
    milliseconds === undefined ||
    typeof milliseconds !== 'number'
  ) {
    return null;
  }

  const minutes = `0${Math.floor((milliseconds / 60000) % 60)}`.slice(-2);
  const seconds = `0${Math.floor((milliseconds / 1000) % 60) % 60}`.slice(-2);

  return {
    minutes,
    seconds,
  };
};

export default timeConverter;
