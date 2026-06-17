export interface login {
  username: string;
  password: string;
  btnSing: string;
}

export const locatorlogin: login = {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    btnSing: 'button[type="submit"]'
}