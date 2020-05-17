import React from 'react'

export interface CellsProps {
    count: number
}

const Cells: React.SFC<CellsProps> = ({ count }) => {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div className="row-data" key={index}>
                    <div className="cell" contentEditable></div>
                </div>
            ))}
        </>
    )
}

export default Cells;