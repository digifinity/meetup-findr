import {
  SAVE_FILTER,
  RESET_FILTER,
  FILTER_OPEN_MEETINGS,
  FILTER_CLOSED_MEETINGS,
  FILTER_STEP_MEETINGS,
  FILTER_HOUR_MEETINGS,
  FILTER_ACCESSIBLE_MEETINGS,
} from '../utils/types';

const initialState = {
  day: 'Select a Day',
  filter: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_FILTER:
      return {
        ...state,
        day: action.payload,
      };
    case FILTER_OPEN_MEETINGS:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_CLOSED_MEETINGS:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_STEP_MEETINGS:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_HOUR_MEETINGS:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_ACCESSIBLE_MEETINGS:
      return {
        ...state,
        filter: action.payload,
      };
    case RESET_FILTER:
      return {
        ...state,
        day: action.payload,
        filter: '',
      };
    default:
      return state;
  }
}
