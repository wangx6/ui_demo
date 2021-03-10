import React from 'react';
import './CentrePanel.css';
import QuoteForm from '../Forms/QuoteForm';

export default function CentrePanelMiddle(){

const formRecord = {
    inputs: { 
        firstName: 'Eamonn',
        lastName: '',
        dob: '',
        term: '',
        email: ''
    },
    errors: {

    }
}
    return (
        <div className="lqe-centre-panel__middle"> 
        <h3>HI2</h3>
        <QuoteForm formRecord={formRecord} ></QuoteForm>
        </div>
    )
}
