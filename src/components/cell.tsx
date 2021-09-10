import * as React from "react";
import styled from "styled-components";
import { CellType, StyleCellProp } from "../interfaces/cell-interface"

const StyledCell = styled.div`
    width: 1.8em;
    height: 1.8em;
    border-radius: 0.1em;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    background: ${(props: StyleCellProp) => props.isAlive ? "darkblue" : "aliceblue"};
  `;


class Cell extends React.PureComponent<CellType> {
    constructor(props: CellType) {
        super(props);
        this.state = {}
    }

    render() {
        const { isAlive } = this.props;
        return (
            <StyledCell
                isAlive={isAlive}
            >
            </StyledCell>
        );
    }
}
export default Cell;
