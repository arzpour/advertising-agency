interface IProjectRes {
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IProjectResDto {
  data: {
    projects: IProjectRes[];
  };
  page: number;
  per_page: number;
  status: string;
  total: number;
  total_pages: number;
}

interface IAddProjectResDto {
  data: {
    project: IProjectRes;
  };
  status: string;
}
