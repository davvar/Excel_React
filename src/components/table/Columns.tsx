import React from 'react'

export interface ColumnsProps {
    count: number
    firstCharCode: number
}

const Columns: React.SFC<ColumnsProps> = ({ count, firstCharCode }) => {
    return (
        <div className="row">
            <div className="row-info"></div>
            <div className="row-data">
                {[...Array(count)].map((_, index) =>
                    <div className="column" key={index}>
                        {String.fromCharCode(firstCharCode + index)}
                        <div className="col-resize"></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Columns;