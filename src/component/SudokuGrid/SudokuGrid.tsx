import styled from 'styled-components'
import { Sudoku, SudokuValue } from '../../types'

const StyledSudokuGrid = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    border: 3px solid black;
`

const StyledSudokuGridRow = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & :nth-child(3n+3) {  
        border-bottom: 3px solid black;
    }
    & :last-child {  
        border-bottom: none;
    }
`

const StyledSudokuGridItem = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    box-sizing: border-box;
  
    & :nth-child(3n+3) {  
        border-right-width: 3px;
    }
    & :last-child {  
        border-right-width: 1px;
    }
`

const StyledSudokuButton = styled.button`
    background: none;
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    font-size: 25px;

    &:hover, &:focus {
        background: lightgreen
    }

`

const StyledSudokuInput = styled.input`
    background: none;
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    font-size: 25px;
    text-align: center;

    &:hover, &:focus {
        background: lightgreen
    }
`

interface SudokuGridProps {
    sudoku: Sudoku
}

export function SudokuGrid(props: SudokuGridProps) {
    return (
        <StyledSudokuGrid>
            {props.sudoku.displayRows.map((row: SudokuValue[], rowIndex: number) =>(
            <StyledSudokuGridRow key={`row-${rowIndex}`}>
                {row.map((item: SudokuValue, itemIndex: number) => (
                    <StyledSudokuGridItem key={`item-${itemIndex}`}>
                        {/* <StyledSudokuButton>{item || ''}</StyledSudokuButton> */}
                        <StyledSudokuInput type="text" inputMode="numeric" pattern="[1-9]" defaultValue={item.value}/>
                    </StyledSudokuGridItem>
                ))}
            </StyledSudokuGridRow>)
                
            )}
        </StyledSudokuGrid>
    )
}
