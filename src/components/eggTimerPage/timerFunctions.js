

export function minuteSum(totalSeconds){
    return Math.floor(totalSeconds / 60);
  }

  export function secondSum(totalSeconds){
    return totalSeconds - (60 * minuteSum(totalSeconds));
  }
