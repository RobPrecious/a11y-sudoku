export interface SudokuValue {
    value: number
    set: boolean
}


export interface Sudoku {
    displayRows: SudokuValue[][]
    xLines: number[][]
    yLines: number[][]
    squares: number[][]
}

const intitalSudokuValue: SudokuValue = {
    value: 0,
    set: false,
}
export const initialState: Sudoku = {
    displayRows:  [...Array(9)].map(e => [...Array(9)].map(() => intitalSudokuValue)), 
    xLines: [...Array(9)].map(e => [...Array(9)].map(() => 0)),
    yLines: [...Array(9)].map(e => [...Array(9)].map(() => 0)),
    squares:  [...Array(9)].map(e => [...Array(9)].map(() => 0))
}