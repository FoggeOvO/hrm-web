
import { getDept } from '@/services/hrm/api';

export default {
  namespace: 'dep',
  state: {
    depinfo: null,
  },
  effects: {
    *queryDept(_, { call, put }) {
      try {
        const res = yield call(getDept);
        yield put({
          type: 'saveDept',
          payload: res,
        });
      } catch (err) {
        console.error('Error:', err);
      }
    },
  },
  reducers: {
    saveDept(state, action) {
      return {
        ...state,
        depinfo: action.payload,
      };
    },
  },
};

