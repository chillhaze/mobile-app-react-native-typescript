export interface IUser {
  user: {
    userName?: string;
    name?: string;
    email: string;
    password?: string;
  };
  token: string;
}
