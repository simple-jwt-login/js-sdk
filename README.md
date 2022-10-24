<p align="center">
    <img src="https://ps.w.org/simple-jwt-login/assets/banner-772x250.png?rev=2106097" alt="Banner"/>
</p>
<p align="center">
   <img src="https://img.shields.io/npm/dt/simple-jwt-login" alt="npm downlods" />
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

let test: RegisterUserInterface;

test = {
  email: "me@mydomain.com",
  password: "my-secret-password",
  nickname: "coolnickname",
};

const simpleJwtLogin = new SimpleJwtLogin(
  "http://your-domain.com",
  "/simple-jwt-login/v1"
);
let result = simpleJwtLogin.registerUser(test, "MY_AUTH_KEY");
```

or

```js
import { SimpleJwtLogin } from "simple-jwt-login";

const simpleJwtLogin = new SimpleJwtLogin(
  "http://your-domain.com",
  "/simple-jwt-login/v1"
);
let result = simpleJwtLogin.registerUser(test, "MY_AUTH_KEY");
```

## Functions

### Constructor

```js
constructor(host: string, namespace: string = '', authCodeKey: string = '')
```

### Autologin

```js
public autologin(params: AutologinInterface, authCode:string = '')
```

### Delete User

```js
public deleteUser(params: DeleteUserInterface, authCode:string = '')
```

### Register User

```js
public registerUser(params: RegisterUserInterface, authCode: string = '')
```

### Reset Password

```js
public resetPassword(params: ResetPasswordInterface, authCode:string = '')
```

### Change Password

```js
public changePassword(params: ChangePasswordInterface, authCode:string = '')
```

### Authenticate

```js
public authenticate(params: AuthenticateInterface, authCode:string = '')
```

### Refresh Token

```js
public refreshToken(params: RefreshTokenInterface, authCode:string = '')
```

### Validate Token

```js
public validateToken(params: ValidateTokenInterface, authCode:string = '')
```

### Revoke Token

```js
public revokeToken(params: RevokeTokenInterface, authCode:string = '')
```
