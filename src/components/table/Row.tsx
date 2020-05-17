import React from 'react'


export interface RowProps {
    row: number
}

const Row: React.SFC<RowProps> = ({ row }) => {
    return (
        <div className="row-info" key={row}>{row}
            <div className="row-resize"></div>
        </div>
    );
}

export default Row;