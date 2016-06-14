import React from 'react'
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-flexbox-grid'

import SmartChessBoard from  '../chessboard'
import style from './chessboard_layout'
/**
 * Layout containing playable chessboard.
 */
class ChessboardLayout extends React.Component {
  /**
   * Display chessboard layout.
   * @returns {Grid} Grid containing playable chessboard
   */
  render() {
    console.log(this.props.counter);
    //This is one of my favorites, super cool 11 ...Nh5
    let pgnHeaders = ['[Event "Fischer - Spassky World Championship Match"]',
        '[Site "Reykjavik ISL"]',
        '[Date "1972.07.16"]',
        '[EventDate "?"]',
        '[Round "3"]',
        '[Result "0-1"]',
        '[White "Boris Spassky"]',
        '[Black "Robert James Fischer"]',
        '[ECO "A61"]',
        '[WhiteElo "?"]',
        '[BlackElo "?"]',
        '[PlyCount "82"]'];
    let pgnGame = `1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 exd5 5. cxd5 d6 6. Nc3 g6 7. Nd2 Nbd7 8. e4 Bg7 9. Be2 O-O 10. O-O Re8 11. Qc2 Nh5 12. Bxh5 gxh5 13. Nc4 Ne5 14. Ne3 Qh4 15. Bd2 Ng4 16. Nxg4 hxg4 17. Bf4 Qf6 18. g3 Bd7 19. a4 b6 20. Rfe1 a6 21. Re2 b5 22. Rae1 Qg6 23. b3 Re7 24. Qd3 Rb8 25. axb5 axb5 26. b4 c4 27. Qd2 Rbe8 28. Re3 h5 29. R3e2 Kh7 30. Re3 Kg8 31. R3e2 Bxc3 32. Qxc3 Rxe4 33. Rxe4 Rxe4 34. Rxe4 Qxe4 35. Bh6 Qg6 36. Bc1 Qb1 37. Kf1 Bf5 38. Ke2 Qe4+ 39. Qe3 Qc2+ 40. Qd2 Qb3 41. Qd4 Bd3+ 0-1`;
    return (
      <Grid className={style['grid']}>
        <SmartChessBoard pgnHeaders = { pgnHeaders.join('\n') } pgnGame = { pgnGame} />
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return { counter: state.counter }
}

export default connect(mapStateToProps)(ChessboardLayout)
