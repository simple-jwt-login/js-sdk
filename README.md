<p align="center">
    <img src="https://ps.w.org/simple-jwt-login/assets/banner-772x250.png?rev=2106097" alt="Banner"/>
</p>
<p align="center">
   <img src="https://img.shields.io/npm/dt/simple-jwt-login" alt="npm downloads" />
</p>

# Simple-JWT-Login SDK

This is a basic SDK for the **Simple-JWT-Login** WordPress plugin. This SDK allows you to create an easy integration for your App and your WordPress instance.

## Installation

```bash
npm install "simple-jwt-login"
```

or

```bash
yarn add "simple-jwt-login"
```

## Usage

```js
import { SimpleJwtLogin, RegisterUserInterface } from "simple-jwt-login";

let params: RegisterUserInterface;

params = {
  email: "me@mydomain.com",
  password: "my-secret-password",
  nickname: "coolnickname",
};

const simpleJwtLogin = new SimpleJwtLogin(
  "http://your-domain.com",
  "/simple-jwt-login/v1"
);
let result = simpleJwtLogin.registerUser(params, "MY_AUTH_KEY");
```

or

```js
import { SimpleJwtLogin } from "simple-jwt-login";

const simpleJwtLogin = new SimpleJwtLogin(
  "http://your-domain.com",
  "/simple-jwt-login/v1",
  "AUTH_KEY"
);
let params = {
  email: "me@mydomain.com",
  password: "my-secret-password",
  nickname: "coolnickname",
};
let result = simpleJwtLogin.registerUser(params, "MY_AUTH_KEY");
```

## Class Methods

### Constructor

```js
/**
 * @param host WordPress instance domain
 * @param namespace Simple-JWT-Login route namespace. Optional. Default to /simple-jwt-login/v1
 * @param authCodeKey Simple-JWT-Login AUTH_CODE_KEY. Optional. Default to AUTH_KEY
 */
constructor(host: string, namespace: string = '', authCodeKey: string = '')
```

### Autologin

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public autologin(params: AutologinInterface, authCode:string = '')
```

### Delete User

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public deleteUser(params: DeleteUserInterface, authCode:string = '')
```

### Register User

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public registerUser(params: RegisterUserInterface, authCode: string = '')
```

### Reset Password

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public resetPassword(params: ResetPasswordInterface, authCode:string = '')
```

### Change Password

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public changePassword(params: ChangePasswordInterface, authCode:string = '')
```

### Authenticate

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public authenticate(params: AuthenticateInterface, authCode:string = '')
```

### Refresh Token

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public refreshToken(params: RefreshTokenInterface, authCode:string = '')
```

### Validate Token

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public validateToken(params: ValidateTokenInterface, authCode:string = '')
```

### Revoke Token

```js
/**
 * @param params Request parameters
 * @param authCode AuthCode value. Optional
 */
public revokeToken(params: RevokeTokenInterface, authCode:string = '')
```
