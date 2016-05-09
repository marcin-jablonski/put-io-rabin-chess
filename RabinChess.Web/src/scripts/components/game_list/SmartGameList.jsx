import React, {PropTypes} from 'react'

import GameList from './GameList'
import {httpGet} from '../../utils/api'

class SmartGameList extends React.Component {

  constructor(props) {
    super(props);

    //i guess this is not redux way :v
    let gameList;
    httpGet('api/Games').then(response => gameList = response);

    this.state = {
      games: gameList
    }
  }

  render() {
    return (
      <GameList games={this.state.games} />
    )
  }

}

export default SmartGameList
