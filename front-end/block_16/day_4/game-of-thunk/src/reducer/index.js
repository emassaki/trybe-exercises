import { combineReducers } from 'redux';
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL } from '../action';

const INITIAL_STATE = {
  loading: false,
  character: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        character: action.charInfo,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ reducer });
