export interface User {
  id: string;
  name: string;
  email: string;
  profile?: string;
  password?: string;
  token?:string;  
}

export interface Client {
  id: string;
  name: string;
  contact: string;
}
export interface Auth {
  email: string;
  password: string;
  token?: string;
}

export type Users = User[];
