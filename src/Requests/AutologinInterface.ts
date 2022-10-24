export interface AutologinInterface {
  JWT: string;

  redirectUrl: string | null;

  [key: string]: string | number | null | boolean | object;
}
