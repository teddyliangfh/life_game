import React from "react";
import styled from "styled-components";
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
    gap: 1em;
    padding: 1em;
    grid-template-columns: repeat(5, auto);
    margin: auto;
  }
  .game-cell {
    width: 3.2em;
    height: 3.2em;
    background: aliceblue;
    border-radius: 0.2em;
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
    blocks: number[];
  }
class Game extends React.Component {
    state: StateType = {
      blocks: [],
    };
  
    componentDidMount() {
      this.initGameData();
    }

    initGameData() {
      let initArr = Array.from(new Array(25).keys());
      this.setState({
        blocks: initArr,
        state: ""
      });
    }
  
    render() {
      const { blocks} = this.state;
  
      return (
        <StyledGameBox>
          <h3>
            Cell Simulator Life Game
          </h3>
          <div className="game-area">
            {blocks.map((item) => {
              return(
                <div key={item} className="game-cell">

                </div>
              );
            })}
          </div>
        </StyledGameBox>
      );
    }
  }
export default Game;