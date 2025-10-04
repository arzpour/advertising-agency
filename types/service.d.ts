interface IService {
  name: string;
  icon?: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

interface IServiceResDto {
  status: string;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    categories: IService[];
  };
}

interface IServiceByIdResDto {
  status: string;
  data: {
    category: IService;
  };
}

interface IServiceByIdResDto {
  status: string;
  data: {
    categoryById: IService;
  };
}
