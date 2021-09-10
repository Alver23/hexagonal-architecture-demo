// Commons
import { STATUS_TYPES } from '@ecommerce/commons/app';

export enum CONSTANTS {
  SET_LOADING = 'SET_LOADING',
  SET_DATA = 'SET_DATA',
  SET_ERROR = 'SET_ERROR',
  SET_RESET = 'SET_RESET',
}

export type IState = {
  status: STATUS_TYPES;
  data: any;
  errors: Error | any;
};

type IAction = {
  type: CONSTANTS;
  payload?: any;
};

export const initialState: IState = {
  data: undefined,
  status: STATUS_TYPES.IDLE,
  errors: undefined,
};

export const fetchReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case CONSTANTS.SET_DATA:
      return {
        data: action.payload,
        errors: undefined,
        status: STATUS_TYPES.SUCCEEDED,
      };
    case CONSTANTS.SET_LOADING:
      return { ...state, status: action.payload };
    case CONSTANTS.SET_ERROR:
      return { ...state, errors: action.payload, status: STATUS_TYPES.FAILED };
    case CONSTANTS.SET_RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
};
