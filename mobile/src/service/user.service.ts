import HttpService from './http.service';
import { IUser } from '../types/User.type';

export default class UserService extends HttpService {
  userUrl: string;
  constructor() {
    super();
    this.userUrl = 'user';
  }
  loginUser(user: IUser) {
    return this.post({
      url: `${this.userUrl}/login`,
      data: user,
    });
  }

  registerUser(user: IUser) {
    const { userName, email, password } = user;
    return this.post({
      url: `${this.userUrl}/register`,
      data: { name: userName, email, password },
    });
  }

  logoutUser(user: IUser) {
    return this.post({
      url: this.userUrl,
      data: user,
    });
  }
}
