const digitsBelowHundred = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

export function say1000Less(num) {
  const hundreds = Math.floor(num / 100);
  const res = [];
  if (hundreds > 0) {
    res.push(`${digitsBelowHundred[hundreds]} hundred`);
    num = num % 100;
  }
  if (num !== 0 || hundreds === 0) {
    const part = [];
    if (num <= 20) {
      part.push(digitsBelowHundred[num]);
    } else {
      const tens = Math.floor(num / 10) * 10;
      const ones = num % 10;
      part.push(digitsBelowHundred[tens]);
      if (ones > 0) {
        part.push(digitsBelowHundred[ones]);
      }
    }
    res.push(part.join("-"));
  }
  return res.join(" and ");
}

export function digitsToEnglish(num) {
  const startNumber = num;
  const units = [
    [1000000000000000, "quadrillion"],
    [1000000000000, "trillion"],
    [1000000000, "billion"],
    [1000000, "million"],
    [1000, "thousand"],
    [1, ""],
  ];
  const res = [];
  for (let unit of units) {
    const base = unit[0];
    const word = unit[1];
    const head = Math.floor(num / base);
    num = num % base;
    if (head > 0 || (res.length <= 0 && base === 1)) {
      res.push(`${say1000Less(head)} ${word}`);
    }
  }
  if (startNumber > 1000 && res[1] !== undefined) {
    if (!res[1].includes("and")) {
      res[1] = "and " + res[1];
    }
  }
  return res.join(" ").trim();
}
