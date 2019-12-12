import './Graveyard.scss';
import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import Gravestone from '../Gravestone/Gravestone';

class GraveYard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const killedStudents = this.props.deadStudents;

    const deadStudentCard = killedStudents.map((student) => <Gravestone key={student.id} killed={student} />);

    return (
      <div className="d-flex justify-content-between">
        {deadStudentCard}
      </div>
    );
  }
}

export default GraveYard;
