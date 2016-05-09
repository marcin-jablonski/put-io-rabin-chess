import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import GameList from './GameList'
import {getGames} from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => {
      dispatch(getGames())
    }
  }
}

const SmartGameList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList)

export default SmartGameList
