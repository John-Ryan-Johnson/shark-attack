import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class Student extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
    livingStudent: PropTypes.func,
    dearlyBeloved: PropTypes.func,
  }

  livingStudentEvent = (e) => {
    const { livingStudent, student } = this.props;
    e.preventDefault();
    livingStudent(student.id);
  };

  dearlyBelovedEvent = (e) => {
    const { dearlyBeloved, student } = this.props;
    e.preventDefault();
    dearlyBeloved(student.id);
  };

  render() {
    const { student } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-text">{student.firstName}</p>
          <p className="card-text">{student.lastName}</p>
        </div>
      </div>
    );
  }
}

export default Student;
