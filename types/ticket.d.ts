interface ISendTicketReq {
  phoneNumber: string;
  message: string;
}

interface ITicketRes {
  phoneNumber: string;
  message: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IAddTicketResDto {
  status: string;
  data: {
    ticket: ITicketRes;
  };
}

interface ITicketResDto {
  status: string;
  data: {
    ticket: ITicketRes[];
  };
}
