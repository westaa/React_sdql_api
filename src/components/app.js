import React, { Component } from 'react';
import NBATeams from '../containers/nba-teams'
import TeamDetail from '../containers/team-detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <NBATeams />
        <TeamDetail />
      </div>
    );
  }
}
