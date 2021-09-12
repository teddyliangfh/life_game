export interface CellType {
    id: number;
    isAlive?: boolean | undefined;
    x: number;
    y: number;
}

export interface StyleCellProp {
    isAlive?: boolean | undefined;
}
