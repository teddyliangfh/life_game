import * as React from 'react';
import styled from "styled-components";
const StyledCell = styled.div`
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
`

interface CellProps {
    id: number,
    isAlive?: boolean | undefined,
    x:number,
    y:number,
    className:string
}
 
const Cell : React.FunctionComponent<CellProps> = (Props) => {
    const {x,y ,id, isAlive, className} = Props;
    return (
        <StyledCell className={`${isAlive?"className":"className"}`}
        cell-x={x}
        cell-y={y}
        >
        </StyledCell>
      );
}
 
export default Cell ;