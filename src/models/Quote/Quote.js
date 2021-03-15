import axios from "axios";
import { useHistory } from "react-router-dom";

function Quote() {
  const formRecord = {
    inputs: {
      firstName: "Eamonn",
      lastName: "",
      dob: "",
      term: "",
      email: "",
    },
    errors: {},
  };

  let history = useHistory();

  // power
  function getFormRecord() {
    return formRecord;
  }

  function setFormRecord(record) {
    formRecord.inputs = Object.assign({}, record);
  }

  async function submitQuote() {
    try {
      console.log("Quote.js - " + formRecord.inputs);
      const result = await axios.post(
        "http://localhost:8080/quote",
        formRecord.inputs
      );
      console.log(result);
      const premiumAmount = result.data.data.quote.amount;
      if (Number.isInteger(Number(premiumAmount)) > 0) {
        history.push({
          pathname: "/success",
          state: { detail: premiumAmount },
        });
      }
    } catch (error) {
      console.log(error);
      history.push("/fail");
    }
  }

  // call api
  return { submitQuote, getFormRecord, setFormRecord };
}

export default Quote;
