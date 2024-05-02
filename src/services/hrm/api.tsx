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

export const getDepIds = async () => {
  return request<API.Result>(`/api/dep/getDepIds`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}


export const getUser = async () => {
  return request<API.Result>('/api/user/getUser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const getUserCountByDepId = async (depids:string) => {
  return request<API.Result>(`/api/user/getUserCount?depId=${depids}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}



export const getUserBydepId = async (depIds:string,current:number) => {
  return request<API.Result>(`/api/user/getUserByDepId?depId=${depIds}&current=${current}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const getUserByAccess = async (access:number) => {
  return request<API.Result>(`/api/user/getUserByAccess/${access}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}