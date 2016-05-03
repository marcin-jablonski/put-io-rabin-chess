import React, {PropTypes} from 'react'
import {ListItem} from 'react-toolbox'

import {Button} from '../ui'

import style from './game_list'
import avatar from '../../../assets/game_list_item_avatar.png'

class GameListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gameId: props.gameId
    }
  }

  static PropTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    gameId: PropTypes.string.isRequired
  }

  render() {
    let {title, tags} = this.props;
    let viewButton = <Button key={1} className={style['game_list_button']} label='View' />
    let editButton = <Button key={2} className={style['game_list_button']} label='Edit' />
    let deleteButton = <Button key={3} className={style['game_list_button']} label='Delete' />
    return(
      <ListItem className={style['game_list_item']} avatar={avatar} caption={title} legend={tags} rightActions={[viewButton, editButton, deleteButton]} ripple={false} />
    );
  }
}

export default GameListItem
