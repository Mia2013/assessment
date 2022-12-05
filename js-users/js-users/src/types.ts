export type User = {
  id: number;
  last_name: string;
  first_name: string;
  status: "active" | "locked";
  created_at: string;
  updated_at: string;
  url: string;
};
