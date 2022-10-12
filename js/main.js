function getRandomNumber(min, max) {
  if (min >= max || min < 0 || max <= 0) {
    return NaN;
  }

  return Math.round(Math.random() * (max - min) + min);
}

getRandomNumber(2, 9);

function checkLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkLength('asdasfasc', 10);
