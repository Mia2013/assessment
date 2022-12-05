import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationRoundedProps = {
  paginationCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaginationRounded({
  paginationCount,
  page,
  setPage,
}: PaginationRoundedProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        mx: "auto",
        alignItems: "center",
        maxWidth: "450px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
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