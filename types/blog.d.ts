interface IBlogRes {
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

interface IBlogResDto {
  data: {
    blogs: IBlogRes[];
  };
  page: number;
  per_page: number;
  status: string;
  total: number;
  total_pages: number;
}

interface IBlogResDto {
  data: {
    blog: IBlogRes;
  };
  status: string;
}

interface IBlogByIdResDto {
  data: {
    blogById: IProjectRes;
  };
  status: string;
}
