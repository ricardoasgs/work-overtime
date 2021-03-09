export const calculateTax = (hours, tax) => {
  let range = 0;
  let reminder = hours;
  let value = 0;

  if (reminder >= 61) {
    range = reminder - 60;
    reminder = 60;
    value += range * tax * 2;
  }
  if (reminder >= 41) {
    range = reminder - 40;
    reminder = 40;
    value += range * tax * 1.8;
  }
  if (reminder >= 26) {
    range = reminder - 25;
    reminder = 25;
    value += range * tax * 1.6;
  }
  if (reminder > 0) {
    value += reminder * tax * 1.5;
  }

  return value.toFixed(2);
};
