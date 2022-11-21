import { Typography } from "@mui/material";

export default function Title({ title }) {
  return (
    <Typography variant="h4" color="secondary">
      {title}
    </Typography>
  );
}
