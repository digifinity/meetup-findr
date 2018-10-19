import {
  SAVE_FILTER,
  RESET_FILTER,
  FILTER_OPEN_MEETINGS,
  FILTER_CLOSED_MEETINGS,
  FILTER_STEP_MEETINGS,
  FILTER_HOUR_MEETINGS,
  FILTER_ACCESSIBLE_MEETINGS,
} from '../utils/types';

export const saveSearchFilter = searchTerm => (dispatch) => {
  dispatch({
    type: SAVE_FILTER,
    payload: searchTerm,
  });
};

export const filterOpenMeetings = payload => (dispatch) => {
  dispatch({
    type: FILTER_OPEN_MEETINGS,
    payload,
  });
};

export const filterClosedMeetings = payload => (dispatch) => {
  dispatch({
    type: FILTER_CLOSED_MEETINGS,
    payload,
  });
};

export const filterStepMeetings = payload => (dispatch) => {
  dispatch({
    type: FILTER_STEP_MEETINGS,
    payload,
  });
};

export const filterHourMeetings = payload => (dispatch) => {
  dispatch({
    type: FILTER_HOUR_MEETINGS,
    payload,
  });
};
export const filterAccessibleMeetings = payload => (dispatch) => {
  dispatch({
    type: FILTER_ACCESSIBLE_MEETINGS,
    payload,
  });
};

export const resetSearchFilter = () => dispatch => {
  dispatch({
    type: RESET_FILTER,
    payload: "Select a Day",
  });
};
