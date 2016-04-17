import React from 'react'
import style from './sample_component'
import {Grid, Row, Col} from 'react-flexbox-grid'

import ChessBoard from  './chessboard'
import Board from './board/board.js'
import CounterContainer from '../containers/CounterContainer'
/**
 * SampleComponent class
 */
export default class SampleComponent extends React.Component {
  /**
   * Display div
   * @return {div} Routed thing
   */
   
   
   
  render() {
    return (
      <div>
        <Grid className={style['sample']}>
          <Row>
            <Col className={style['col1']} xs={6} md={3}>Hello, world!</Col>
            <Col className={style['col2']} xs={6} md={3}>Hello, world!</Col>
            <Col className={style['col3']} xs={6} md={6}>
              <CounterContainer/>
            </Col>
          </Row>
        </Grid>
        <Grid>
			<Row>
				<Col className={style['col1']} xs={6} md={3}>Hello, world!</Col>
				<Col className={style['col3']} xs={6} md={6}><div id="board" style="width:500px"><Board/></div></Col>
				<Col className={style['col2']} xs={6} md={3}>Hello, world!</Col>
			</Row>
        </Grid>

      </div>
    )
  }
}
