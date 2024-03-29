import React, { PropTypes } from 'react'
import ChessJS from 'chess.js'
import { Button } from '.././ui'
import { Tabs, Tab } from 'react-toolbox'
import FileSaver from 'file-saver'
import ChessBoard from './ChessBoard'
import { FullMove, NumberOfMove, Move, Notation } from './components'
import style from './chess_board'


/**
* Renders chessboard with logic (uses chess.js library).
*/
class SmartChessBoard extends React.Component {

  /**
  * Basic constructor.
  * @param {object} props Passed properties
  * @returns {SmartChessBoard} New SmartChessBoard instance
  */
  constructor(props) {
    super(props);
    /**
    * @type {object}
    * @property {ChessJS} chessboard object
    */
    this.game = ChessJS();

    let { pgnHeaders, pgnGame } = this.props;
    if (pgnGame) this.game.load_pgn( pgnHeaders + pgnGame );

    /**
    * @type {object}
    * @property {string} fen Game notation
    */
    this.state = {
      fen: this.game.fen(),
      index: 0
    };
  }

  _undo() {
    this.game.undo();
    this.setState({
      fen: this.game.fen()
    });
  }

  _next() {
    let { pgnGame } = this.props;
    let fen = this.game.fen();
    let whiteToMove = true;
    if (fen.search(' b ') != -1)
      whiteToMove = false;
    else if (fen.search(' w ') != -1)
      whiteToMove = true;

    let moveString = ` ${fen.slice(fen.lastIndexOf(' ') + 1)}.`;
    let move = pgnGame.search(moveString) + moveString.length + 1;
    let endOfMove = pgnGame.indexOf(' ', move);
    let foundMove = pgnGame.slice(move, endOfMove);
    if (!whiteToMove) {
      move = endOfMove + 1;
      endOfMove = pgnGame.indexOf(' ', move);
      foundMove = pgnGame.slice(move, endOfMove);
    }
    this.game.move(foundMove);
    this.setState({
      fen: this.game.fen()
    });
  }

  _exportToFile() {
    let blob = new Blob([this.game.pgn()], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'my_game.pgn');
  }

  _onDragStart(source, piece, position, orientation) {
    if (this.game.game_over() === true ||
      (this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (this.game.turn() === 'b' && piece.search(/^w/) !== -1))
        return false;
  }

  _onDrop(source, target) {
    let move = this.game.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    });

    if (move === null) return 'snapback';
  }

  _onSnapEnd() {
    this.setState({
      fen: this.game.fen()
    });
  }

  _renderNotation() {
    return this.props.pgnGame.split(' ').map((elem, index) => {
        if ( index % 3 === 0) return (<NumberOfMove number={ elem } key={ index } />);
        else return (<Move move= { elem } key={ index } />);
    });
  }

  _renderNotation2(game) {
    let notes = [];
    for (let i=0; i < game.length; i+=3)
    {
      notes.push((<FullMove key={ i } number={ game[i] } moveWhite={ game[i + 1] } moveBlack={ game[i + 2] } />));
    }
    return notes;
  }

  handleTabChange = (index) => {
    this.setState({index});
  };

  /**
  * Renders wrapped chessboard
  * @returns {ChessBoard} Chessboard with logic
  */
  render () {
    let moves = this._renderNotation2( this.props.pgnGame.split(' '));
    let editedMoves = this._renderNotation2( this.game.pgn().replace(/(\[.*?\]?\n)/g, '').split(' '));

    return (
      <div className={style['wrapper']}>
        <div className={style['chessboard-wrapper']}>
          <ChessBoard
            fen = { this.state.fen }
            onlyValid = { true }
            sparePieces = { false }
            onDragStart = { this._onDragStart.bind(this) }
            onDrop = { this._onDrop.bind(this) }
            onSnapEnd = { this._onSnapEnd.bind(this) }
          />
        <div className={style['buttons']}>
          <Button label='Back' onClick={this._undo.bind(this)}></Button>
          <Button label='Next' onClick={this._next.bind(this)}></Button>
          <Button label='Export to file' onClick={this._exportToFile.bind(this)}></Button>
        </div>
        </div>
        <Tabs index={ this.state.index } onChange={ this.handleTabChange.bind(this) } className={style['tabs']}>
          <Tab label='Source'>
            <Notation className={style['notation']}>
              { moves }
            </Notation>
          </Tab>
          <Tab label='Playground'>
            <Notation className={style['notation']}>
              { editedMoves }
            </Notation>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default SmartChessBoard
