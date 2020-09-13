import React, { useState } from 'react';

const INITIAL_ROWS_COUNT = 20;
const LETTERS = {
  first: 'A'.charCodeAt(0),
  last: 'Z'.charCodeAt(0),
  get interval() {
    return this.last - this.first + 1;
  }
};

interface ICoordinates<T> {
  col?: T;
  row?: T;
}

const Table: React.FC<{}> = () => {
  const [rowsCount] = useState(INITIAL_ROWS_COUNT);
  const [selectedZone, setSelectedZone] = useState<ICoordinates<string> & { shouldSelectAll?: boolean; }>({});
  const [selectedCell, setSelectedCell] = useState<ICoordinates<string>>({ col: '1', row: '1' });

  const selectZone = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, { shouldSelectAll = false } = {}) => {
    if (shouldSelectAll) {
      setSelectedCell({ row: '1', col: '1' });
      return setSelectedZone({ shouldSelectAll });
    }

    const { dataset: { col, row } } = e.currentTarget;
    const isCell = col && row;
    if (isCell) {
      e.stopPropagation();
      setSelectedZone({});
      setSelectedCell({ col, row });
    } else {
      setSelectedZone({ col, row });
      if (row) setSelectedCell({ row, col: '1' });
      else setSelectedCell({ row: '1', col });
    };

  };

  const shouldHighlight = ({ col, row, isCell = false }: ICoordinates<number> & { isCell?: boolean; }): string => {
    const onlyCellIsSelected = !Object.keys(selectedZone).length;

    let className = '';
    if (isCell) {
      className = selectedCell.col === `${col}` && selectedCell.row === `${row}` ? ' selected' : '';
    } else if (selectedZone.shouldSelectAll) {
      className = 'selected';
    } else if (onlyCellIsSelected) {
      className = selectedCell.row === row?.toString() || selectedCell.col === col?.toString() ? 'selected-cell-colRow' : '';
    } else if ((selectedZone.col && !col) || (selectedZone.row && !row)) {
      // if row is selected add class to the columns and vice versa
      className = 'selected-cell-colRow';
    } else {
      className = selectedZone.col === `${col}` || selectedZone.row === `${row}` ? ' selected' : '';
    }

    return className;
  };

  return (
    <div className="excel__table">
      <div className="row">
        <div onClick={(e) => selectZone(e, { shouldSelectAll: true })} className="row-info"></div>
        <div className="row-data">
          {[...Array(LETTERS.interval + 1)].map((_, col) => (
            col !== 0 &&
            <div
              onClick={selectZone}
              data-col={`${col}`}
              className={`column ${shouldHighlight({ col })}`} key={col}>
              {String.fromCharCode(LETTERS.first + col - 1)}
              <div className="col-resize"></div>
            </div>
          ))}
        </div>
      </div>


      {[...Array(rowsCount + 1)].map((_, row) =>
        row !== 0 &&
        <div data-row={`${row}`} onClick={selectZone} className="row" key={row}>
          <div className={`row-info ${shouldHighlight({ row })}`}>{row}
            <div className="row-resize"></div>
          </div>
          {[...Array(LETTERS.interval + 1)].map((_, col) => (
            col !== 0 &&
            <div
              onClick={selectZone}
              data-row={row} data-col={col}
              className={`row-data ${shouldHighlight({ col, row })}`}
              key={col}
            >
              <div className={`cell ${shouldHighlight({ col, row, isCell: true })}`} contentEditable></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;