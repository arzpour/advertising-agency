interface ICategory {
  name: string;
  icon?: string;
  description: string;
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

interface IAddCategoryResDto {
  status: string;
  data: {
    category: ICategory;
  };
}
