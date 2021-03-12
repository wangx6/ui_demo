import axios from 'axios';

function Quote() {


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

    

    // power
    function getFormRecord() {
        return formRecord;
    }

    function setFormRecord(record) {
        formRecord.inputs = Object.assign({}, record);
    }

    async function submitQuote() {
     
        console.log('Quote.js - ' + formRecord.inputs);
        const result = await axios.post('http://localhost:8080/quote', formRecord.inputs);
        console.log(result);
        return result;
        
        
    }

    // call api

    return {submitQuote, getFormRecord, setFormRecord};
}

export default Quote;