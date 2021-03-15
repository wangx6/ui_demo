import axios from 'axios';

function Quote() {

    const formRecord = {
        inputs: { 
            firstName: 'Kevin',
            lastName: 'Doyle',
            dob: '15/12/1974',
            term: '20',
            email: 'kevin@test.com'
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
        console.log(formRecord.inputs);
        const result = await axios.post('http://localhost:8080/quote', formRecord.inputs);
        console.log(result);
        return result;
    }

    // call api

    return {submitQuote, getFormRecord, setFormRecord};
}

export default Quote;