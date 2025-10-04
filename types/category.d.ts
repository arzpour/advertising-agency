interface ICategory {
  name: string;
  icon: string;
  type: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

interface ICategoryResDto {
  status: string;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    categories: ICategory[];
  };
}

interface ICategoryByIdResDto {
  status: string;
  data: {
    category: ICategory;
  };
}

interface ICategoryByIdResDto {
  status: string;
  data: {
    categoryById: ICategory;
  };
}

type CategoryTabsType = "all" | "project" | "blog";
