export function convertArabicNumerals(number: string) {
  if (!number) {
    return number;
  }
  const numbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  let finalNumber = "";
  for (var i = 0; i < number.length; i++) {
    const digit = numbers.indexOf(number[i]);
    if (digit != -1) {
      finalNumber += digit;
    } else {
      finalNumber += number[i];
    }
  }
  if (!finalNumber || finalNumber.length !== number.length) {
    return number;
  }
  return finalNumber;
}
