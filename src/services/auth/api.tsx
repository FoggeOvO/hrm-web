import { request } from '@umijs/max';

/** 获取token POST /api/auth/getToken */
export const getToken =  async (body: API.LoginParams, options?: { [key: string]: any }) => {
    return request<API.LoginResult>('/api/auth/getToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }

/** 获取token POST /api/auth/getCurrentUser */
export const getCurrentUser = async () => {
    return request<API.Result>('/api/auth/getCurrentUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }


export const logout =  () => {
  localStorage.removeItem('token')
}