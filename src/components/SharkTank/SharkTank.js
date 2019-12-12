import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const livingStudents = this.props.liveStudents;
    const studentCard = livingStudents.map((student) => <LiveStudent key={student.id} student={student} />);
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {studentCard}
      </div>
    );
  }
}

export default SharkTank;
