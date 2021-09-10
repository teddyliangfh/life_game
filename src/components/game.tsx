import React from "react";
import styled from "styled-components";
import Cell from '../components/cell';

const StyledGameBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  background: papayawhip;
  border: 3px solid #ffdba5;
  border-radius: 0.5em;
  margin-bottom: 1em;
  > .game-area {
    width: 20em;
    height: 20em;
    background: #fff;
    margin: auto;
    display: grid;
    gap: .1em;
    padding: 1em;
    grid-template-columns: repeat(10, auto);
    margin: auto;
  }
  .game-cell {
    width: 1.6em;
    height: 1.6em;
    background: aliceblue;
    border-radius: 0.1em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  .game-cell:hover {
    background-color: rgb(85, 112, 134);
  }
`;
interface StateType {
  cellsArr: any[];
}
class Game extends React.Component {
  state: StateType = {
    cellsArr: [],
  };

  componentDidMount() {
    this.initGameData();
  }

  initGameData() {
    let initArr = [];
    let key = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        initArr.push({ id: key, isAlive: false, x: j, y: i, });
        key++
      }
    }
    console.log('initArr', initArr);

    this.setState({
      cellsArr: initArr,
      state: ""
    });
  }
  // handleClickCell(event: React.MouseEvent<HTMLElement>) {
  //   console.log("event.target",event.target);

  // }
  handleClickCell(aim: number) {
    console.log(aim);
    this.updateCells(aim);
  }

  updateCells(id: number | undefined) {
    const { cellsArr } = this.state;
    const upDatedCellArray = cellsArr && cellsArr.map((item) => {
      if (item.id === id) {
        item.isAlive = !item.isAlive
      }
      return item
    })
    this.setState({ cellsArr: upDatedCellArray });

  }

  render() {
    const { cellsArr } = this.state;
    console.log('render cellsArr', cellsArr);

    return (
      <StyledGameBox>
        <h3>
          Cell Simulator Life Game
        </h3>
        <div className="game-area">
          {cellsArr.map((item) => {
            return (
              <div key={item?.id} onClick={() => { this.handleClickCell(item?.id) }} >
                <Cell
                  key={item?.id}
                  id={item?.id}
                  x={item.x}
                  y={item.y}
                  isAlive={item.isAlive}
                // cellClick={this.handleClickCell}
                />
              </div>
            );
          })}
        </div>
      </StyledGameBox>
    );
  }
}
export default Game;