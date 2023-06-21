export interface ResponseAPI{
  success: boolean;
  data?: any;
  error?:any;
}

// export interface ResponseAPI {
//   success: boolean;
//   message?: string;
//   data: any;
// }

export interface SaveUser {
  name: string;
  email: string;
  password: string;
  profile: string;
}
