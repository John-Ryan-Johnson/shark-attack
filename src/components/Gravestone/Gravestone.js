import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    deadStudents: studentShape.studentShape,
  }

  render() {
    const { gravestone } = this.props;

    return (
      <div>
        <img className="image rounded-circle" src={gravestone.imgUrl} alt="student pic"></img>
      </div>
    );
  }
}

export default Gravestone;
