import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
import studentShape from '../../helpers/propz/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentsData from '../../helpers/data/studentsData';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

  sharkAttackEvent = (e) => {
    const students = studentsData.livingStudents();
    if (students.length > 0) {
      const { sharkAttack } = this.props;
      e.preventDefault();
      sharkAttack();
    }
  }

  render() {
    const daLiveStudents = this.props.livingStudents;
    const liveStudentCard = daLiveStudents.map((liveStudent) => <LiveStudent key={liveStudent.id} liveStudent={liveStudent} />);
    return (
      <div className="sharkTank d-flex flex-wrap justify-content-between">
        <button className="btn rounded-circle" onClick={this.sharkAttackEvent}>EAT</button>
        {liveStudentCard}
      </div>
    );
  }
}

export default SharkTank;
