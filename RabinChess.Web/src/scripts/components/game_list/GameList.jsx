import React, {PropTypes} from 'react'
import {List, ListSubHeader} from 'react-toolbox'

import style from './game_list'

import GameListItem from './GameListItem'

class GameList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      games: props.games
    }
  }

  static PropTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    let {games} = this.props;
    let gameListItems = games ? games.map((game, i) => {
      return (
        <GameListItem key={i} title={game.title} tags={game.tags} gameId={game.id} />
      )
    }) : <ListSubHeader caption="No games found" />;
    return (
      <List selectable ripple>
        <ListSubHeader className={style['game_list_header']} caption="Your games" />
        {gameListItems}
      </List>
    );
  }

}

export default GameList
