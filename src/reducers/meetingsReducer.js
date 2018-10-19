import { FETCH_ALL_MEETINGS } from '../utils/types';

const initialState = {
  items: [],
  isLoading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_MEETINGS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
