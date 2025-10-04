interface IChildren {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface IParams {
  page: number;
  limit: number;
  total?: number;
  total_pages?: number;
  type?: string;
}

type SubjectsType = "دسته بندی" | "مشتریان" | "بلاگ" | "پروژه" | "خدمات";
