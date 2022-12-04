import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationRoundedProps = {
  count: number;
};

export default function PaginationRounded(props: PaginationRoundedProps) {
  return (
    <Stack spacing={2}>
      <Pagination count={props.count} shape="rounded" />
    </Stack>
  );
}
