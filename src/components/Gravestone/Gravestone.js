import './Gravestone.scss';
import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    killed: studentShape.studentShape,
  }

  render() {
    const eaten = this.props;

    return (
      <div className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{eaten.firstName} {eaten.lastName}</h5>
        </div>
      </div>
    );
  }
}

export default Gravestone;
