import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { digitsToEnglish } from "./digitsToEnglish";

export default function DisplayWord({ number }) {
  const [word, setWord] = useState("");

  useEffect(() => {
    if (number.value !== "") setWord(digitsToEnglish(number.value));
  },[number.value]);

  return <Typography>{word}</Typography>;
}
