import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';
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
      <div className="sharkTank d-flex flex-wrap justify-content-around">
        <button className="btn rounded-circle" onClick={this.sharkAttackEvent}>EAT</button>
        {studentCard}
      </div>
    );
  }
}

export default SharkTank;
