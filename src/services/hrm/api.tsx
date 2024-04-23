import { request } from '@umijs/max';

/** 获取token POST /api/auth/getToken */
export const getDept = async () => {
  return request<API.Result>('/api/dep/getDept', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


export const getUser = async () => {
  return request<API.Result>('/api/dep/getUser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}