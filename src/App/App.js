import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import studentsData from '../helpers/data/studentsData';


class App extends React.Component {
  state = {
    students: [],
  }


  componentDidMount() {
    const students = studentsData.getStudents();
    this.setState({ students });

    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });

    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
