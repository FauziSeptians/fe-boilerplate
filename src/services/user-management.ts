import axios from '@/lib/axios';
import { UserManagementImplementation } from '@/types/user-management';
import { AxiosResponse } from 'axios';

class UserManagement implements UserManagementImplementation {
  private readonly prefix: string = '';
  private readonly version: string = 'v1';

  constructor() {
    this.prefix = `/user-management/${this.version}`;
  }

  get<T = AxiosResponse>(): Promise<T> {
    return axios(`${this.prefix}/users`);
  }
}

const userManagement = new UserManagement();

export default userManagement;
