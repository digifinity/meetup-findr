import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button,
} from 'reactstrap';

import {
  saveSearchFilter,
  resetSearchFilter,
  filterOpenMeetings,
  filterClosedMeetings,
  filterAccessibleMeetings,
  filterStepMeetings,
  filterHourMeetings,
} from '../actions/meetingFiltersAction';

class MeetingFilter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleOpenMeetings = this.handleOpenMeetings.bind(this);
    this.handleClosedMeetings = this.handleClosedMeetings.bind(this);
    this.handleAccessibleMeetings = this.handleAccessibleMeetings.bind(this);
    this.handleStepMeetings = this.handleStepMeetings.bind(this);
    this.handleHourMeetings = this.handleHourMeetings.bind(this);

    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  select(event) {
    this.props.saveSearchFilter(event.target.innerText);
  }

  handleReset() {
    this.props.resetSearchFilter();
  }

  handleOpenMeetings() {
    this.handleReset();
    this.props.filterOpenMeetings('open_meetings');
  }

  handleClosedMeetings() {
    this.handleReset();
    this.props.filterClosedMeetings('closed_meetings');
  }

  handleAccessibleMeetings() {
    this.handleReset();
    this.props.filterAccessibleMeetings('wheelchair_access');
  }

  handleStepMeetings() {
    this.handleReset();
    this.props.filterStepMeetings('step_meetings');
  }

  handleHourMeetings() {
    this.handleReset();
    this.props.filterHourMeetings('one_hour');
  }

  render() {
    return (
      <div>
        <div className="meeting-filter">
          <ul className="filter-buttons">
            <li>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>{this.props.day}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.select}>Monday</DropdownItem>
                  <DropdownItem onClick={this.select}>Tuesday</DropdownItem>
                  <DropdownItem onClick={this.select}>Wednesday</DropdownItem>
                  <DropdownItem onClick={this.select}>Thursday</DropdownItem>
                  <DropdownItem onClick={this.select}>Friday</DropdownItem>
                  <DropdownItem onClick={this.select}>Saturday</DropdownItem>
                  <DropdownItem onClick={this.select}>Sunday</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Button color="primary" onClick={this.handleOpenMeetings}>
                Open Meetings
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={this.handleClosedMeetings}>
                Closed Meetings
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={this.handleAccessibleMeetings}>
                Accessible Meetings
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={this.handleStepMeetings}>
                Step Meetings
              </Button>
            </li>
            <li>
              <Button color="primary" onClick={this.handleHourMeetings}>
                1 Hour Meetings
              </Button>
            </li>
            <li>
              <Button color="warning" onClick={this.handleReset.bind(this)}>
                Reset Filter
              </Button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  day: state.filter.day,
});

MeetingFilter.propTypes = {
  saveSearchFilter: PropTypes.func.isRequired,
  resetSearchFilter: PropTypes.func.isRequired,
  filterOpenMeetings: PropTypes.func.isRequired,
  filterClosedMeetings: PropTypes.func.isRequired,
  filterStepMeetings: PropTypes.func.isRequired,
  filterAccessibleMeetings: PropTypes.func.isRequired,
  filterHourMeetings: PropTypes.func.isRequired,
  item: PropTypes.string,
};

export default connect(
  mapStateToProps,
  {
    saveSearchFilter,
    resetSearchFilter,
    filterOpenMeetings,
    filterClosedMeetings,
    filterStepMeetings,
    filterAccessibleMeetings,
    filterHourMeetings,
  },
)(MeetingFilter);
