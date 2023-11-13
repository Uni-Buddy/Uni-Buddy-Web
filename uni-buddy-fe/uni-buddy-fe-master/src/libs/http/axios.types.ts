export type Error = {
  message: string;
  domain: string;
  reason: string;
};

export type ErrorRespose = {
  code: number;
  errors: Error[];
  message: string;
};

export type HttpResponse = {
  status: number;
  message: string;
};
