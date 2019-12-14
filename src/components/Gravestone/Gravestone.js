import React from 'react';
import studentShape from '../../helpers/propz/studentShape';

class Gravestone extends React.Component {
  static propTypes = {
    deadStudents: studentShape.studentShape,
  }

  render() {
    const { gravestone } = this.props;

    return (
      <div className="headStone">
        <p className="first text-white m-0">{gravestone.firstName}</p>
        <p className="last text-white m-0">{gravestone.lastName}</p>
        <img className="image rounded-circle mb-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezpqjep6Y5BG3gO5W47cwxf7BaKb7YcgieaM2YlvKJxbn6iqs&s" alt="skull"></img>
      </div>
    );
  }
}

export default Gravestone;
