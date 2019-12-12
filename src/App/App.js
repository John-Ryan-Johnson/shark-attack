import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank/SharkTank';
import GraveYard from '../components/Graveyard/Graveyard';


class App extends React.Component {
  state = {
    liveStudents: [],
    deadStudents: [],
  }


  componentDidMount() {
    const liveStudents = studentsData.livingStudents();
    this.setState({ liveStudents });

    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ deadStudents });
  }

  render() {
    return (
      <div className="App">
        <h1>Shark Attack</h1>
        <div className="row">
          <div className="tank col-4 mx-auto mb-3">
            <h2 className="text-center mb-1">Shark Tank</h2>
            <SharkTank liveStudents={this.state.liveStudents} />
          </div>
          <div className="grave col-4 mx-auto mb-3">
            <h2 className="text-center mb-1">Grave Yard</h2>
            <GraveYard deadStudents={this.state.deadStudents} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
