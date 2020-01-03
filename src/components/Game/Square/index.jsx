import React from 'react';
import styles from '../styles.module.scss';
 function SquareFunc (props) {
    const {squaresList} = props;
    const list = squaresList && typeof(squaresList) !=='string' && squaresList.length>0 ? squaresList.map(el=>{
        return(<div className={styles.game_grid}  data={el}>{this.state.squares[el]}</div>)
    }) : 'error';
  return (
    {list}      
    )
}


export default SquareFunc;