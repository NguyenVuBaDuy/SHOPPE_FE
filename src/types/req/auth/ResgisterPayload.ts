// export class RegisterPayload{
//   email: string
//   username: string
//   password: string
//   fullName: string

//   constructor(payload : RegisterPayload){
//     this.email = payload.email
//     this.username = payload.username
//     this.password = payload.password
//     this.fullName = payload.fullName
//   }
// }

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
  fullName: string;
}
