import React from 'react';

import { Delete, ExitToApp } from '@material-ui/icons';


export interface HeaderProps {

}

const Header: React.SFC<HeaderProps> = () => {
    return (
        <div className="excel__header">

            <input type="text" className="input" defaultValue="Новая таблица" />

            <div>

                <div className="button">
                    <Delete />
                </div>

                <div className="button">
                    <ExitToApp />
                </div>

            </div>

        </div>
    );
};

export default Header;