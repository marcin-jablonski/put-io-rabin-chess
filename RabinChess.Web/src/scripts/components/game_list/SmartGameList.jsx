import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { hashHistory} from 'react-router'

import * as Action from '../../actions'
import GameList from './GameList'


let gameList = [
  {
    tags:
      {
        event: 'Fischer - Spassky World Championship Match',
        white: 'Boris Spassky',
        black: 'Robet James Ficher',
        whiteElo: '?',
        blackElo: '?'
      },
      id: 'ID1',
      pgn: `1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Nd2 Nbd7 8. e4 Bg7 9. Be2 O-O 10. O-O Re8 11. Qc2 Nh5 12. Bxh5 gxh5 13. Nc4 Ne5 14. Ne3 Qh4 15. Bd2 Ng4 16. Nxg4 hxg4 17. Bf4 Qf6 18. g3 Bd7 19. a4 b6 20. Rfe1 a6 21. Re2 b5 22. Rae1 Qg6 23. b3 Re7 24. Qd3 Rb8 25. axb5 axb5 26. b4 c4 27. Qd2 Rbe8 28. Re3 h5 29. R3e2 Kh7 30. Re3 Kg8 31. R3e2 Bxc3 32. Qxc3 Rxe4 33. Rxe4 Rxe4 34. Rxe4 Qxe4 35. Bh6 Qg6 36. Bc1 Qb1 37. Kf1 Bf5 38. Ke2 Qe4+ 39. Qe3 Qc2+ 40. Qd2 Qb3 41. Qd4 Bd3+ 0-1`
  },
   {
     tags:
     {
      event: 'Hoogovens (1996)',
      white: 'Vassily Ivanchuk',
      black: 'Alexey Shirov',
      whiteElo: '2755',
      blackElo: '2688'
      },
      id: 'ID2',
      pgn: `1.d4 d5 2.c4 c6 3.Nc3 Nf6 4.Nf3 e6 5.Bg5 dxc4 6.e4 b5 7.e5 h6 8.Bh4 g5 9.Nxg5 hxg5 10.Bxg5 Nbd7 11.exf6 Bb7 12.g3 c5 13.d5 Qb6 14.Bg2 O-O-O 15.O-O b4 16.Na4 Qb5 17.a3 exd5 18.axb4 cxb4 19.Be3 Nc5 20.Qg4+ Rd7 21.Qg7 Bxg7 22.fxg7 Rg8 23.Nxc5 d4 24.Bxb7+ Rxb7 25.Nxb7 Qb6 26.Bxd4 Qxd4 27.Rfd1 Qxb2 28.Nd6+ Kb8 29.Rdb1 Qxg7 30.Rxb4+ Kc7 31.Ra6 Rb8 32.Rxa7+ Kxd6 33.Rxb8 Qg4 34.Rd8+ Kc6 35.Ra1 1-0`
   },
   {
     tags:
     {
      event: 'USSR Championship (1962)',
      white: 'Viktor Korchnoi',
      black: 'Mikhail Tal',
      whiteElo: '2655',
      blackElo: '2688'
      },
      id: 'ID3',
      pgn: `1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 6. Nf3 g6 7. g3 Bg7 8. Bg2 O-O 9. O-O Na6 10. h3 Nc7 11. e4 Nd7 12. Re1 Ne8 13. Bg5 Bf6 14. Be3 Rb8 15. a4 a6 16. Bf1 Qe7 17. Nd2 Nc7 18. f4 b5 19. e5 dxe5 20. Nde4 Qd8 21. Nxf6+ Nxf6 22. d6 Ne6 23. fxe5 b4 24. Nd5 Nxd5 25. Qxd5 Bb7 26. Qd2 Qd7 27. Kh2 b3 28. Rac1 Qxa4 29. Bc4 Bc8 30. Rf1 Rb4 31. Bxe6 Bxe6 32. Bh6 Re8 33. Qg5 Re4 34. Rf2 f5 35. Qf6 Qd7 36. Rxc5 Rc4 37. Rxc4 Bxc4 38. Rd2 Be6 39. Rd1 Qa7 40. Rd2 Qd7 41. Rd1 Qa7 42. Rd4 Qd7 43. g4 a5 44. Kg3 Rb8 45. Kh4 Qf7 46. Kg5 fxg4 47. hxg4 Bd7 48. Rc4 a4 49. Rc7 a3 50. Rxd7 Qxd7 51. e6 Qa7 52. Qe5 axb2 53. e7 Kf7 54. d7 1-0`
   }
];


/**
* Get game list from api
*/
class SmartGameList extends React.Component {

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {SmartGameList} List of games from api
  */
  constructor(props) {
    super(props);

    //get games from api
    /**
    * @type {object}
    * @property {object} games List of games from api
    */
    this.state = {
      games: gameList
    }
    console.log(this.state.games);
  }

  editTagsHandler() {

  }

  viewHandler(i) {
    this.props.changeGame(this.state.games[i].pgn);
    hashHistory.push('board');
  }

  deleteHandler(i) {
    let tempGame = this.state.games.slice();
    tempGame.splice(i,1);
    this.setState({
      games: tempGame
    });
  }

  /**
  * Renders list of games based on data from api
  * @return {GameList} List of games
  */
  render() {
    return (
      <GameList
         games={this.state.games}
         editTagsHandler={this.editTagsHandler.bind(this)}
         viewHandler={this.viewHandler.bind(this)}
         deleteHandler={this.deleteHandler.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  game: state.currentGame,
  tags: state.currentTags
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeGame: (game) => {
      dispatch(Action.changeGame(game))
    },
    changeTags: (tags) => {
      dispatch(Action.changeTags(tags))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartGameList)
