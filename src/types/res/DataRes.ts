export class DataRes {
  status?: number;
  message?: string;
  result?: object;
  constructor(data: DataRes) {
    this.message = data.message;
    this.status = data.status;
    this.result = data.result;
  }
}
