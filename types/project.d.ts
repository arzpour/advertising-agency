interface IProjectRes {
  projects: [];
}

interface IProjectResDto {
  data: IProjectRes;
  page: 1;
  per_page: 7;
  status: "success";
  total: 0;
  total_pages: 0;
}
