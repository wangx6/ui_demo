import React from 'react';
import './CentrePanel.css';
import QuoteForm from '../Forms/QuoteForm';
import Quote from '../../models/Quote/Quote';
import GlobalErrorPopup from '../GlobalErrorPopup/GlobalErrorPopup';

export default function CentrePanelMiddle(){

    const quote = Quote();
    const formRecord = quote.getFormRecord();

    async function handleSubmit(record) {
        quote.setFormRecord(record);
        const response = await quote.submitQuote();
        
        if (response.statusText === "OK") {
            console.log('Response OK');
        }
        else if (response.statusText === "WARN") {
            console.log('Response Warning');
        }
        else if (response.statusText === "ERROR") {
            console.log('Response Error');
        }

        console.log('Centre Panel Middle.js', response);
        //return
    }

    return (
        <div className="lqe-centre-panel__middle"> 
            <h3>HI2</h3>
            <QuoteForm formRecord={formRecord} handleSubmit={handleSubmit} ></QuoteForm>
        </div>
    )
}
