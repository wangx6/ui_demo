import React from 'react';
import './CentrePanel.css';
import CentrePanelTop from './CentrePanelTop';
import CentrePanelMiddle from './CentrePanelMiddle';
import CentrePanelBottom from './CentrePanelBottom';
export default function CentrePanel() {

    return (
        <div className="lqe-centre-panel"> 
            <CentrePanelTop></CentrePanelTop>
            <CentrePanelMiddle></CentrePanelMiddle>
            <CentrePanelBottom></CentrePanelBottom>
        </div>
    )
}
