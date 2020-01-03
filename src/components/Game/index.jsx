import React, { Component } from 'react';
import Square from './Square';
import styles from './styles.module.scss';

export default class extends Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count : 0,
      text : ''      
    }
    this.winnerLine = 
    [ [0, 1, 2],
      [3, 4, 5], 
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }
  isWinner = () => {
    let winnerSign = (this.state.count % 2 === 0) ? 'X' : 'O';
    
    for (let i = 0; i<8; i++){
      let line = this.winnerLine[i];
      console.log(this.state.squares[line[0]]);
        if (this.state.squares[line[0]] === winnerSign
          && this.state.squares[line[1]] === winnerSign
          && this.state.squares[line[2]] === winnerSign
          ){
            console.log('The Winner is' + winnerSign);
            this.state.text = 'The Winner is ' + winnerSign;
            setTimeout(()=>{
                this.setState({squares: Array(9).fill(null)});
                this.setState({count: 0});
                this.setState({text: ''});
            }, 3000)  
        }
      }
    }

  clickHandler = (e) => {
      let data = e.target.getAttribute('data');
      let currentSquare = this.state.squares;
          
      currentSquare[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
      this.setState({count : this.state.count + 1});
      this.setState({squares : currentSquare});
     

      this.isWinner();
  }
    
  
  render(){
    let squaresTable = null;
    for (let i=0; i<8; i++){
      squaresTable=<Square squaresList={[i]}/>
      return squaresTable;
      
    }
    
    return (
      <div className={styles.tic_tac_toe}>
        
        {squaresTable}
        <div>
        {this.state.text}
        </div> 
      </div>
       
    )
  }
};

