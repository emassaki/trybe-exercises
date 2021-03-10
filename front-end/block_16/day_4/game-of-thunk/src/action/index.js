import charAPI from '../services/charAPI';

export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

function searchStart(searchedChar) {
  return {
    type: SEARCH_START,
    loading: true,
    searchedChar,
  };
}

function searchSucess(charInfo) {
  return {
    type: SEARCH_SUCCESS,
    loading: false,
    charInfo,
  };
}

function searchFailed(error) {
  return {
    type: SEARCH_FAIL,
    loading: false,
    error,
  };
}

export function fetchChar(char) {
  return async (dispatch) => {
    try {
      dispatch(searchStart(char));

      const charInfoArray = await charAPI(char);
      const charInfo = charInfoArray[0];

      dispatch(searchSucess(charInfo));
    } catch (error) {
      dispatch(searchFailed(error));
    }
  };
}
