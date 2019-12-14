import React from 'react';
import studentShape from '../../helpers/propz/studentShape';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    livingStudents: studentShape.studentShape,
  }

  render() {
    const { liveStudent } = this.props;
    return (
      <div>
        <img className="image rounded-circle" src={liveStudent.imgUrl} alt="student pic"></img>
      </div>
    );
  }
}

export default LiveStudent;
