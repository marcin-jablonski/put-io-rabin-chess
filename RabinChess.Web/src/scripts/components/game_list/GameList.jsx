import React, {PropTypes} from 'react'
import {List, ListSubHeader, Dialog} from 'react-toolbox'

import style from './game_list'

import GameListItem from './GameListItem'
import EditDialog from './EditDialog'

/**
* List of user games
*/
class GameList extends React.Component {

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {GameList} List of games
  */
  constructor(props) {
    super(props);

    /**
    * @type {object}
    * @property {GameListItem} User games
    */
    this.state = {
      games: props.games,
      showEditDialog: false,
      currentGame: 0
    }
  }

  static PropTypes = {
    games: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  editTagsHandler(i) {
    this.setState({showEditDialog: !this.state.showEditDialog,
    currentGame: i});
    this.props.editTagsHandler(i);
  }

  viewHandler(i) {
    this.props.viewHandler(i);
  }

  deleteHandler(i) {
    this.props.deleteHandler(i);
  }

  handleToggle() {
    this.setState({showEditDialog: !this.state.showEditDialog});
  }

  /**
  * Renders user games List
  * @return {List} List of games
  */
  render() {
    let {games, editTagsHandler} = this.props;
    let gameListItems = games.map((game, i) => {
      return (
        <GameListItem
          key={i}
          tags={game.tags}
          gameId={game.id}
          editTagsHandler={this.editTagsHandler.bind(this, i)}
          viewHandler={this.viewHandler.bind(this, i)}
          deleteHandler={this.deleteHandler.bind(this, i)}
        />
      )
    })
    return (
      <div>
        <List selectable ripple>
          <ListSubHeader className={style['game_list_header']} caption="Your games" />
          {gameListItems}
        </List>
        <Dialog
          active={this.state.showEditDialog}
          onEscKeyDown={this.handleToggle.bind(this)}
          onOverlayClick={this.handleToggle.bind(this)}
        >
        <EditDialog gameTags={games[this.state.currentGame]}/>
        </Dialog>
      </div>
    );
  }

}

export default GameList
