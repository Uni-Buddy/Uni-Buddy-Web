import { http } from '@libs/http';
import { Login, ResLogin } from './accountLoginForm.types';
import { instance } from '@libs/http/axiosInstance';

export const login = async (login: Login) => {
  const loginRes = await http.post<ResLogin>(`users/login`, login);

  if (loginRes.status === 200 && loginRes.data.data) {
    const token = loginRes.data.data.token;
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return loginRes;
};
