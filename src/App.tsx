import React from 'react';
import './App.css';
// make sure the .json is in the same directory
import teamsData from './CollegeBasketballTeams.json';

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface TeamCardProps {
  team: Team;
}

class TeamCard extends React.Component<TeamCardProps> {
  render() {
    const { school, name, city, state } = this.props.team;
    return (
      <div className="team-card">
        <h2>{school}</h2>
        <p>
          <strong>Mascot:</strong> {name}
        </p>
        <p>
          <strong>Location:</strong> {city}, {state}
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the official March Madness Teams Site.</h1>
        <div className="team-list">
          {teamsData.teams.map((team: Team, index: number) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
