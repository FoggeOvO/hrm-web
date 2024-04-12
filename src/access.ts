/**
 * @see https://umijs.org/docs/max/access#access
 * */

/**这里的根据返回当前的用户来确认所拥有的权限
1 : 超级管理员
2 : 考勤管理员
3 : 薪酬管理员  */

enum useraccess {
  administrator = 1,
  HRBP = 2,
  HRMG = 3
}
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.access === useraccess.administrator,
    canHRBP: currentUser && currentUser.access === useraccess.HRBP,
    canHRMG: currentUser && currentUser.access === useraccess.HRMG,
  };
}
