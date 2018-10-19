import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { fetchAllMeetings } from '../actions/meetingsAction';

import wheelchair_access from './images/disabled.svg';

class Meetings extends Component {
  state = {
    meetings: {},
  };

  componentDidMount() {
    this.props.fetchAllMeetings();
  }

  render() {
    const {
      meetings, day, filter, isLoading,
    } = this.props;

    const sortByTime = (a, b) => (a.acf.start_time < b.acf.start_time ? -1 : a.acf.start_time > b.acf.start_time ? 1 : 0);

    const daysOfWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const tempMeetings = {};

    const sortedMeets = [];

    for (var i = 0; i < daysOfWeek.length; i++) {
      tempMeetings[daysOfWeek[i]] = meetings
        .filter(x => x.acf.day === daysOfWeek[i])
        .sort(sortByTime);
      sortedMeets.push(tempMeetings[daysOfWeek[i]]);
    }

    let sortedMeetings = sortedMeets.flat();

    switch (filter) {
      case 'open_meetings':
        sortedMeetings = sortedMeets.flat().filter(meeting => meeting.acf.closed_meeting == false);
        break;
      case 'closed_meetings':
        sortedMeetings = sortedMeets.flat().filter(meeting => meeting.acf.closed_meeting === '1');
        break;
      case 'wheelchair_access':
        sortedMeetings = sortedMeets
          .flat()
          .filter(meeting => meeting.acf.wheelchair_access === '1');
        break;
      case 'step_meetings':
        sortedMeetings = sortedMeets.flat().filter(meeting => meeting.acf.step_meeting === '1');
        break;
      case 'one_hour':
        sortedMeetings = sortedMeets.flat().filter(meeting => meeting.acf.one_hour === '1');
        break;
      default:
        sortedMeetings = sortedMeets.flat();
    }
    if (day !== 'Select a Day') {
      sortedMeetings = sortedMeetings.flat().filter(meeting => meeting.acf.day === day);
    }
    return (
      <div>
        <div className="meeting-container">
          <Table striped>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Meeting Details</th>
                <th>Meeting Type</th>
                <th>Wheelchair Access</th>
                <th>Notes</th>
              </tr>
            </thead>
            {isLoading ? (
              <div className="loading-container">
                <ReactLoading type="spin" color="#999" height={50} width={50} />
              </div>
            ) : (
              <tbody>
                {sortedMeetings.map(meeting => (
                  <tr key={meeting.id}>
                    <td>{meeting.acf.day}</td>
                    <td>{meeting.acf.start_time}</td>
                    <td>
                      <strong>{meeting.acf.name}</strong>
                      <br />
                      {meeting.acf.address}
                    </td>
                    <td>{meeting.acf.closed_meeting ? 'Closed' : 'Open'}</td>
                    <td>
                      {meeting.acf.wheelchair_access && (
                        <img src={wheelchair_access} height="16" alt="Wheelchair Access" />
                      )}
                    </td>
                    <td>{meeting.acf.notes ? meeting.acf.notes : ''}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetings: state.meetings.items,
  isLoading: state.meetings.isLoading,
  day: state.filter.day,
  filter: state.filter.filter,
});

Meetings.propTypes = {
  fetchAllMeetings: PropTypes.func.isRequired,
  meetings: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchAllMeetings },
)(Meetings);
