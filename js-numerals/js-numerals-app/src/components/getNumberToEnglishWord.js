import { useState } from "react";
import { Typography } from "@mui/material";

export default function GetNumberToEnglishWord({ number }) {
  const [word, setWord] = useState("");

  const digitsUnderTwenty = {
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
  };

  const tens = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };


  const units = [
      [1000000000000000, "quadrillion"],
      [1000000000000, "trillion"],
      [1000000000, "billion"],
      [1000000, "million"],
      [1000, "thousand"],
    ]

  return <Typography>{word}</Typography>;
}
