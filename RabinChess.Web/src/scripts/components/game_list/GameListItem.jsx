  import React, {PropTypes} from 'react'
import {ListItem} from 'react-toolbox'

import {Button} from '../ui'

import style from './game_list'
import avatar from '../../../assets/game_list_item_avatar.png'

/**
* Game item
*/
class GameListItem extends React.Component {

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {GameListItem} User game
  */
  constructor(props) {
    super(props);

    /**
    * @type {object}
    * @property {Integer} gameId Game ID
    */
    this.state = {
      gameId: props.gameId
    }
  }

  static PropTypes = {
    tags: PropTypes.object.isRequired,
    gameId: PropTypes.string.isRequired
  }

  /**
  * Renders game item
  * @return {ListItem} User game
  */
  render() {
    let {tags} = this.props;
    let {white, black, whiteElo, blackElo, event} = tags;
    let viewButton = <Button key={1} className={style['game_list_button']} label='View' onClick={this.props.viewHandler} />
    let editButton = <Button key={2} className={style['game_list_button']} label='Edit' onClick={this.props.editTagsHandler} />
    let deleteButton = <Button key={3} className={style['game_list_button']} label='Delete' onClick={this.props.deleteHandler} />
    return(
      <ListItem className={style['game_list_item']} avatar={avatar} caption={`${white} - ${whiteElo} vs ${black} - ${blackElo}`} legend={event} rightActions={[viewButton, editButton, deleteButton]} ripple={false} />
    );
  }
}

export default GameListItem
