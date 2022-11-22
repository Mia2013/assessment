import { useState, useEffect } from "react";
import { Box, Typography, Alert } from "@mui/material";
import { digitsToEnglish } from "./digitsToEnglish";

export default function DisplayWord({ number }) {
  const [word, setWord] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (number.value !== "") {
      const delayToShowWord = setTimeout(() => {
        if (typeof number.value === "number") {
          setWord(digitsToEnglish(number.value));
          setAlert(false);
        } else {
          setAlert(true);
        }
      }, 1000);
      return () => clearTimeout(delayToShowWord);
    }
  }, [number.value]);

  return (
    <Box>
      <Typography>{word}</Typography>
      {alert ? (
        <Alert severity="error">
          {number.value} is not a number! Please enter a valid number!
        </Alert>
      ) : (
        " "
      )}
    </Box>
  );
}
