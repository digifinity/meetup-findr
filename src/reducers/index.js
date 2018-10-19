import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import meetingsReducer from './meetingsReducer';
import meetingFiltersReducer from './meetingFiltersReducer';

const rootReducer = combineReducers({
  meetings: meetingsReducer,
  filter: meetingFiltersReducer,
});

export default rootReducer;
