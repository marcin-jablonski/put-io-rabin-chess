import React from 'react'
import style from './sample_component'
import {Grid, Row, Col} from 'react-flexbox-grid'

import ChessBoard from  './chessboard/ChessBoard'
import CounterApp from '../containers/CounterApp'
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
            //<Col className={style['col3']} xs={6} md={6}>Hello, world!</Col>
          </Row>
        </Grid>
        <Grid>
          <ChessBoard/>
		  <CounterApp/>
        </Grid>
      </div>
    )
  }
}
