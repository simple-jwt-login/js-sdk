export interface ChangePasswordInterface {
  email: string;
  new_password: string;

  code: string | null;
  JWT: string | null;

  [key: string]: string | number | null | boolean | object;
}
