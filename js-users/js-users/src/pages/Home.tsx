import { useState } from "react";
import PaginationRounded from "../components/PaginationRounded";

type HomeProps = {
  paginationCount: number;
};

export default function Home(props: HomeProps) {
  const [page, setPage] = useState<number>(1);


  return (
    <div>
      Home
      <PaginationRounded count={props.paginationCount} />
    </div>
  );
}
