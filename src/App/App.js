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
        <div>
          <div className="col-6">
            <h1 className="text-center">Shark Tank</h1>
            <SharkTank liveStudents={this.state.liveStudents} />
          </div>
          <div className="col-6">
            <h1 className="text-center">Grave Yard</h1>
            <GraveYard deadStudents={this.state.deadStudents} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
