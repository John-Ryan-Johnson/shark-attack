import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

class SharkTank extends React.Component {
  static propTypes = {
    liveStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const { sharkAttack } = this.props;
    e.preventDefault();
    sharkAttack();
  };

  render() {
    const livingStudents = this.props.liveStudents;
    const studentCard = livingStudents.map((student) => <LiveStudent key={student.id} student={student} />);
    return (
      <div className="d-flex flex-wrap justify-content-between">
        <button className="btn btn-danger" onClick={this.sharkAttackEvent}>Shark Attack</button>
        {studentCard}
      </div>
    );
  }
}

export default SharkTank;
