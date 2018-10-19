import axios from 'axios';
import { FETCH_ALL_MEETINGS } from '../utils/types';

export const fetchAllMeetings = () => (dispatch) => {
  axios
    .get('http://aa-edinburgh.test/wp-json/wp/v2/meetings?per_page=100')
    .then((res) => {
      dispatch({
        type: FETCH_ALL_MEETINGS,
        payload: res.data,
        isLoading: false,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
