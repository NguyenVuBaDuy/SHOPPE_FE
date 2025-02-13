export class ErrorRes {
  status: number;
  message: string;
  errors: object;
  constructor(data: ErrorRes) {
    this.message = data.message;
    this.status = data.status;
    this.errors = data.errors;
  }
}
