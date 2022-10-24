export interface AuthenticateInterface {
  email: string | null;
  username: string | null;
  password: string | null;
  password_hash: string | null;

  [key: string]: string | number | null | boolean | object;
}
