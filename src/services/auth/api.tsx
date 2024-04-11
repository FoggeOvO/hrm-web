import { request } from '@umijs/max';

/** 获取token POST /api/auth/getToken */
export async function getToken(body: API.LoginParams, options?: { [key: string]: any }) {
    return request<API.LoginResult>('/api/auth/getToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }

/** 获取token POST /api/auth/getToken */
export async function getCurrentUser(body: API.LoginParams, options?: { [key: string]: any }) {
    return request<API.LoginResult>('/api/auth/getToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  }
