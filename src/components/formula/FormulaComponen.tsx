import * as React from 'react';

export interface FormulaProps {

}

const Formula: React.SFC<FormulaProps> = () => {
    return (
        <div className="excel__formula">
            <div className="info">fx</div>
            <div className="input" contentEditable spellCheck={false}></div>
        </div>
    )
}

export default Formula;