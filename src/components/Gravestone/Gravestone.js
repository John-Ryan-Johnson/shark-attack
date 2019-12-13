import './Gravestone.scss';
import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    killedStudent: studentShape.studentShape,
  }

  render() {
    const { killedStudent } = this.props;

    return (
      <div className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{killedStudent.firstName}</h5>
          <h5 className="card-title">{killedStudent.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Gravestone;
