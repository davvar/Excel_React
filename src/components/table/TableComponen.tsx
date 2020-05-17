import React, { useState } from 'react'
import Columns from './Columns'
import Cells from './Cells'
import Row from './Row'

const LETTERS = {
    first: 'A'.charCodeAt(0),
    last: 'Z'.charCodeAt(0),
    get interval() {
        return this.last - this.first + 1
    }
}

export interface TableProps {

}



const Table: React.SFC<TableProps> = () => {
    const [rowsCount, setRowsCount] = useState(20)



    return (
        <div className="excel__table">
            <Columns count={LETTERS.interval} firstCharCode={LETTERS.first} />
            {[...Array(rowsCount)].map((_, row) =>
                <div className="row">
                    <Row row={row + 1} />
                    <Cells count={LETTERS.interval} />
                </div>
            )}
        </div>
    );
}

export default Table;