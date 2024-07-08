import React, { useState, useEffect } from 'react';
import { Button, Popup } from 'semantic-ui-react';

import { timeConverter } from '../../utils';

const Countdown = ({ countdownTime, timeOver, setTimeTaken }) => {
  // const totalTime = countdownTime * 1000;
  // const [timerTime, setTimerTime] = useState(totalTime);
  // const { minutes, seconds } = timeConverter(timerTime);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const newTime = timerTime - 1000;

  //     if (newTime >= 0) {
  //       setTimerTime(newTime);
  //     } else {
  //       clearInterval(timer);

  //       Swal.fire({
  //         icon: 'info',
  //         title: `Oops! Time's up.`,
  //         text: 'See how you did!',
  //         confirmButtonText: 'Check Results',
  //         timer: 5000,
  //         willClose: () => timeOver(totalTime - timerTime),
  //       });
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     setTimeTaken(totalTime - timerTime + 1000);
  //   };

  //   // eslint-disable-next-line
  // }, [timerTime]);

  return (
    <Button.Group basic floated="right">
      <Popup
        content="Minutes"
        trigger={<Button active>{minutes}</Button>}
        position="bottom left"
      />
      <Popup
        content="Seconds"
        trigger={<Button active>{seconds}</Button>}
        position="bottom left"
      />
    </Button.Group>
  );
};

export default Countdown;
