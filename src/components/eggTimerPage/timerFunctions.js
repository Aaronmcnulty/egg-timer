

export function minuteSum(totalSeconds){
    return Math.floor(totalSeconds / 60);
  }

  export function secondsSum(totalSeconds){
    return totalSeconds - (60 * minuteSum(totalSeconds));
  }
