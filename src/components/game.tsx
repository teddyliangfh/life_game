import React from "react";
import styled from "styled-components";
import Cell from '../components/cell';
import { CellType } from "../interfaces/cell-interface"

const StyledGameBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 2em;
  background: papayawhip;
  border: 3px solid #ffdba5;
  width: 40em;
  height: 30em;
  margin: auto;
  border-radius: .5em;
  .game-area {
    width: 20em;
    height: 20em;
    background: #fff;
    margin: auto;
    display: grid;
    gap: .2em;
    padding: .6em;
    grid-template-columns: repeat(10, auto);
    margin: auto;
    border-radius: 0.2em;
  }
  .button-area {
    padding-top: 1em;
  }
`;
const Button = styled.button`
   color: #fff;
    height: 2em;
    font-size: 1em;
    width: 8.8em;
    background-color: rgb(25, 44, 56);
    border-radius: 0.25rem;
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5em;
    margin-right: 0.5em;
    cursor: pointer;
    user-select: none;
`;
interface StateType {
  cellsArr: CellType[];
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

    this.setState({
      cellsArr: initArr
    });
  }
  // handleClickCell(event: React.MouseEvent<HTMLElement>) {
  //   console.log("event.target",event.target);

  // }
  handleClickCell(aim: number) {
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

  resetCells() {
    this.initGameData();
  }

  nextGeneration() {
    const { cellsArr } = this.state;
    //deep clone 
    let arrayCopy: [] = JSON.parse(JSON.stringify(cellsArr));
    const nexGenerationArr = arrayCopy.map((cell) => {
      const newCell = this.handleLife(cell);
      return newCell;
    })
    this.setState({ cellsArr: nexGenerationArr })
  }

  //decide a cell is dead or alive in next generation
  handleLife(cell: CellType) {
    const aliveNeighbour = this.inspectNeighbours(cell);
    const { isAlive } = cell;
    //A Cell with fewer than two live neighbours dies of under-population.
    if (isAlive && aliveNeighbour < 2) {
      cell.isAlive = false;
      return cell;
    }
    //A Cell with more than 3 live neighbours dies of overcrowding.
    if (isAlive && aliveNeighbour > 3) {
      cell.isAlive = false;
      return cell;
    }
    //A Cell with 2 or 3 live neighbours lives on to the next generation.
    if (isAlive && (aliveNeighbour === 2 || aliveNeighbour === 3)) {
      cell.isAlive = true;
      return cell
    }
    //An empty Cell with exactly 3 live neighbours "comes to life".
    if (isAlive === false && aliveNeighbour === 3) {
      cell.isAlive = true;
      return cell
    }
    // //A Cell who "comes to life" outside the board should wrap at the other side of the board.
    // if() {

    // }
    return cell

  }

  // inspect Neighbours, and count how many alive cells
  inspectNeighbours(cell: CellType) {
    const { cellsArr } = this.state;
    const checkArray = this.createCheckRule(cell);
    let aliveNumber = 0;
    // const { x, y, id } = cell;
    for (let i = 0; i <= checkArray.length; i++) {
      let checkIndex = checkArray[i];
      if (cellsArr[checkIndex] && cellsArr[checkIndex].isAlive) {
        aliveNumber++;
      }
    }
    return aliveNumber
  }

  // todo make rule more flexible
  createCheckRule(cell: CellType) {
    const { x, y, id } = cell;
    //inner cell: check 8 neigbours
    if (x > 0 && x < 9 && y > 0 && y < 9) {
      return [-11 + id, -10 + id, -9 + id, -1 + id, 1 + id, 9 + id, 10 + id, 11 + id]
    } else {
      return []
    }
    //cell is in the ouline check 5 neigbours
    //cell is on the edge check 3 neigbours
  }

  render() {
    const { cellsArr } = this.state;

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
        <div className="button-area" >
          <Button onClick={() => { this.resetCells() }}>
            reset
          </Button>
          <Button onClick={() => { this.nextGeneration() }}>
            next generation
          </Button>
        </div>
      </StyledGameBox>
    );
  }
}
export default Game;