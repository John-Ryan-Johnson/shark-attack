import React from 'react';
import studentShape from '../../helpers/propz/studentShape';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    liveStudents: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="pool">
        <img className="image rounded-circle" src={student.imgUrl} alt="student pic"></img>
      </div>
    );
  }
}

export default LiveStudent;
