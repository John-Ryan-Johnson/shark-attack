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
    const studentGraves = this.props.deadStudents;

    const deadStudentCard = studentGraves.map((gravestone) => <Gravestone key={gravestone.id} gravestone={gravestone} />);
    return (
      <div className="graveYard d-flex flex-wrap justify-content-between">
        {deadStudentCard}
      </div>
    );
  }
}

export default GraveYard;
