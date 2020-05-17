import React from 'react'

import { FormatAlignLeft, FormatAlignRight, FormatAlignCenter, FormatBold, FormatItalic, FormatUnderlined } from '@material-ui/icons';

export interface ToolbarProps {

}

const Toolbar: React.SFC<ToolbarProps> = () => {
    return (
        <div className="excel__toolbar">

            <div className="button">
                <FormatAlignLeft />
            </div>

            <div className="button">
                <FormatAlignRight />
            </div>

            <div className="button">
                <FormatAlignCenter />
            </div>

            <div className="button">
                <FormatBold />
            </div>

            <div className="button">
                <FormatItalic />
            </div>

            <div className="button">
                <FormatUnderlined />
            </div>

        </div>
    );
}

export default Toolbar;