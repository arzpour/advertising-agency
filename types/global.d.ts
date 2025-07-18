interface IChildren {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface IParams {
  page: number;
  limit: number;
  total?: number;
  total_pages?: number;
}
