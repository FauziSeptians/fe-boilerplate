import { AxiosResponse } from 'axios';

export type UserManagementImplementation = {
  get<T = AxiosResponse>(): Promise<T>;
};
