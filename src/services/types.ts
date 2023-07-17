export interface ResponseAPI{
  success: boolean;
  data?: any;
  error?:any;
}

export interface SaveUser {
  name: string;
  email: string;
  password: string;
  profile: string;
}

export interface SaveClient{
  name: string;
  contact: string;
}


