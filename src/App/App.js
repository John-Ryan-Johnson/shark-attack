import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank/SharkTank';
import GraveYard from '../components/Graveyard/Graveyard';


class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }


  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });

    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  sharkAttack = () => {
    const livingStudents = studentsData.livingStudents();
    const randomStudent = livingStudents[Math.floor(Math.random() * livingStudents.length)];
    const randomStudentId = randomStudent.id;
    studentsData.followTheLight(randomStudentId);
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ deadStudents, livingStudents });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">SHARK ATTACK</h1>
        <h2 className="tagLine text-white mb-5">Who's Next?</h2>
        <div className="row">
          <div className="tank col-4 mx-auto mb-3">
            <h1 className="tankName text-center mb-5 mt-4">Shark Tank</h1>
            <SharkTank livingStudents={this.state.livingStudents} sharkAttack={this.sharkAttack} />
          </div>
          <div className="grave col-4 mx-auto mb-3">
            <h1 className="graveName text-center text-white mb-5 mt-4">Grave Yard</h1>
            <GraveYard deadStudents={this.state.deadStudents} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
