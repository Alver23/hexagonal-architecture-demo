// Dependencies
import React from 'react';

// Commons
import { STATUS_TYPES } from '../../commons/app';

// Reducers
import { fetchReducer, initialState, CONSTANTS, IState } from './reducer';

export const useFetch = (
  callback: any,
  dependencies: Array<any>,
  initialValues: any = {}
): [IState, () => void, () => void] => {
  const values = {
    ...initialState,
    ...initialValues,
  };

  const [state, dispatch] = React.useReducer(fetchReducer, values);

  const isMounted = React.useRef(true);

  React.useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );

  const resetState = React.useCallback(() => {
    dispatch({ type: CONSTANTS.SET_RESET });
  }, []);

  const memoizeCallback = React.useCallback(async (params) => {
    return (await callback)(params);
  }, dependencies);

  const fetcher = React.useCallback(
    (params = {}) => {
      dispatch({ type: CONSTANTS.SET_LOADING, payload: STATUS_TYPES.LOADING });
      memoizeCallback(params)
        .then((response) => {
          if (isMounted.current) {
            dispatch({ type: CONSTANTS.SET_DATA, payload: response });
          }
        })
        .catch((error) => {
          dispatch({ type: CONSTANTS.SET_ERROR, payload: error });
        });
    },
    [memoizeCallback]
  );

  React.useEffect(fetcher, dependencies);

  return [state, fetcher, resetState];
};

export default useFetch;
