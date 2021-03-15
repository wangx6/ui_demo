import React from "react";
import "./CentrePanel.css";
import QuoteForm from "../Forms/QuoteForm";
import Quote from "../../models/Quote/Quote";
import { useHistory } from "react-router-dom";

export default function CentrePanelMiddle() {
  let history = useHistory();

  const quote = Quote();
  const formRecord = quote.getFormRecord();

  async function onSubmitQuoteFrom(record) {
    quote.setFormRecord(record);
    await quote.submitQuote();
  }

  return (
    <div className="lqe-centre-panel__middle">
      <h3>HI2</h3>
      <QuoteForm
        formRecord={formRecord}
        onSubmitQuoteFrom={onSubmitQuoteFrom}
      ></QuoteForm>
    </div>
  );
}
