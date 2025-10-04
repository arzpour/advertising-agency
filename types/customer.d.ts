interface ICustomer {
  name: string;
  icon: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

interface ICustomerResDto {
  status: string;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    customers: ICustomer[];
  };
}

interface ICustomerByIdResDto {
  status: string;
  data: {
    customer: ICustomer;
  };
}

interface ICustomerByIdResDto {
  status: string;
  data: {
    customerById: ICustomer;
  };
}
