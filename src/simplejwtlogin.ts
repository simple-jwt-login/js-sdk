import { AuthenticateInterface } from "./Requests/AuthenticateInterface";
import { AutologinInterface } from "./Requests/AutologinInterface";
import { ChangePasswordInterface } from "./Requests/ChangePasswordInterface";
import { DeleteUserInterface } from "./Requests/DeleteUserInterface";
import { RefreshTokenInterface } from "./Requests/RefreshTokenInterface";
import { RegisterUserInterface } from "./Requests/RegisterUserInterface";
import { ResetPasswordInterface } from "./Requests/ResetPasswordInterface";
import { RevokeTokenInterface } from "./Requests/RevokeTokenInterface";
import { ValidateTokenInterface } from "./Requests/ValidateTokenInterface";
export class SimpleJwtLogin {
  private host: string;
  private namespace = "/simple-jwt-login/v1";
  private authCodeKey = "AUTH_KEY";

  private callback: any;
  private sync = false;

  /**
   * @param host WordPress instance domain
   * @param namespace Simple-JWT-Login route namespace. Optional. Default to /simple-jwt-login/v1
   * @param authCodeKey Simple-JWT-Login AUTH_CODE_KEY. Optional. Default to AUTH_KEY
   */
  constructor(host: string, namespace = "", authCodeKey = "") {
    this.host = host;
    if (authCodeKey !== "") {
      this.authCodeKey = authCodeKey;
    }
    if (namespace !== "") {
      this.namespace = namespace;
    }
  }

  public withCallback(callback: any) {
    this.callback = callback;
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public autologin(params: AutologinInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    window.location.href =
      this.buildUrl() + "/autologin&" + this.queryData(params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public deleteUser(params: DeleteUserInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    return this.call("DELETE", "/users", params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public registerUser(params: RegisterUserInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    return this.call("POST", "/users", params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public resetPassword(params: ResetPasswordInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }
    return this.call("POST", "/user/reset_password", params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public changePassword(params: ChangePasswordInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    return this.call("PUT", "/user/reset_password", params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public authenticate(params: AuthenticateInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    return this.call("POST", "/auth", params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public refreshToken(params: RefreshTokenInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    return this.call("POST", "/auth/refresh", params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public validateToken(params: ValidateTokenInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    return this.call("GET", "/auth/validate", params);
  }

  /**
   * @param params Request parameters
   * @param authCode AuthCode value. Optional
   */
  public revokeToken(params: RevokeTokenInterface, authCode = "") {
    if (authCode !== "") {
      params[this.authCodeKey] = authCode;
    }

    return this.call("POST", "/auth/revoke", params);
  }

  private buildUrl() {
    return this.host + "/?rest_route=" + this.namespace;
  }

  private queryData(data: any) {
    const result = [];
    for (const d in data)
      result.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));

    return result.join("&");
  }

  /**
   * @param method Request method. One of: GET, POST, PUT, PATCH, DELETE
   * @param endpoint The endpoint that will be called
   * @param params Request parameters
   * @private
   */
  private call(method: string, endpoint: string, params: any = null) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4) {
        if (typeof this.callback === "function") {
          if (xhttp.status === 200 || xhttp.status === 201) {
            this.callback(JSON.parse(xhttp.responseText), xhttp.status);
          } else {
            this.callback(
              { error: "true", response: xhttp.responseText },
              xhttp.status
            );
          }
        } else {
          this.sync = true;
        }
      }
    };

    let callUrl = this.buildUrl() + endpoint;
    if (method === "GET") {
      callUrl = callUrl + "&" + this.queryData(params);
      params = null;
    }

    xhttp.open(method, callUrl, this.sync);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    const dataToSend = params !== null ? JSON.stringify(params) : null;
    xhttp.send(dataToSend);

    if (this.sync) {
      return xhttp.responseText;
    }
  }
}
