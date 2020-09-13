import React from 'react';
import Header from '../components/header/HeaderComponent';
import Toolbar from '../components/toolbar/ToolbarComponen';
import Formula from '../components/formula/FormulaComponen';
import Table from '../components/table/TableComponen';


export interface ExcelPageProps {

}

const ExcelPage: React.FC<ExcelPageProps> = () => {
    return (
        <div className="excel">
            <Header />
            <Toolbar />
            <Formula />
            <Table />
        </div>
    );
};

export default ExcelPage;