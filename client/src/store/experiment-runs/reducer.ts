import { Reducer } from 'redux';
import { fetchExperimentRunsAction, fetchExperimentRunsActionTypes, IExperimentRunsState } from './types';

const experimentRunsInitialState: IExperimentRunsState = {
  data: undefined,
  loading: false
};

export const experimentRunsReducer: Reducer<IExperimentRunsState> = (
  state = experimentRunsInitialState,
  action: fetchExperimentRunsAction
) => {
  switch (action.type) {
    case fetchExperimentRunsActionTypes.FETCH_EXP_RUNS_REQUEST: {
      return { ...state, loading: true };
    }
    case fetchExperimentRunsActionTypes.FETCH_EXP_RUNS_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case fetchExperimentRunsActionTypes.FETCH_EXP_RUNS_FAILURE: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
