import Head from 'next/head'
import React from 'react'
import { SudokuGrid } from '../src/component'
import { Sudoku } from '../src/types'
import { initialState } from '../src/types/sudokuTypes'

export default function Home() {
    const [sudoku, setSudoku] = React.useState<Sudoku>(initialState)
    return (
        <div>
            <Head>
                <title>Accessibility Sudoku</title>
                <meta name="description" content="An Accessible Sudoku app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>A11y Sudoku</h1>

                <SudokuGrid sudoku={sudoku} />
            </main>
        </div>
    )
}
