import React from 'react';
import './CentrePanel.css';
import QuoteForm from '../Forms/QuoteForm';
import Quote from '../../models/Quote/Quote';
import { useHistory } from 'react-router-dom';

export default function CentrePanelMiddle(){

    let history = useHistory();
    
    const quote = Quote();
    const formRecord = quote.getFormRecord();


    async function handleSubmit(record) {

        quote.setFormRecord(record);
        try{const response = await quote.submitQuote()
        console.log('Centre Panel Middle.js', response);     
        
        const premiumAmount = response.data.data.quote.amount;
        
        if(Number.isInteger(Number(premiumAmount)) > 0){
        history.push({
            pathname: '/success',
            state: { detail: premiumAmount }
            })
        }

        else {
            history.push("/fail")
        }
    }catch{
        history.push("/fail");
    }
   
    }
    return (
        <div className="lqe-centre-panel__middle"> 
            <h3>HI2</h3>
            <QuoteForm formRecord={formRecord} handleSubmit={handleSubmit} ></QuoteForm>
        
        </div>
    )
}
