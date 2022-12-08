import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "../style/styles";

type PaginationRoundedProps = {
  paginationCount: number;
  setPage: (value: number) => void;
};

export default function PaginationRounded({
  paginationCount,
  setPage,
}: PaginationRoundedProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number):void => {
    setPage(value);
  };

  return (
    <Stack spacing={2} sx={[styles.pageItems, styles.listBackground]}>
      <Pagination
        count={paginationCount}
        shape="rounded"
        defaultPage={1}
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </Stack>
  );
}
