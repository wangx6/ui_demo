import React, { useContext, useRef } from 'react';
import './CentrePanel.css';
import QuoteForm from '../Forms/QuoteForm';
import Quote from '../../models/Quote/Quote';

import NotificationContext from "../../contexts/NotificationContext";

export default function CentrePanelMiddle() {
  const { service } = useContext(NotificationContext);
  console.log(service);
  const refShowNotification = useRef(service.showNotification);
  const quote = Quote();
  const formRecord = quote.getFormRecord();

  async function handleSubmit(record) {
    quote.setFormRecord(record);
    const response = await quote.submitQuote();

    if (response.statusText === "OK") {
      setTimeout(() => {
        refShowNotification.current("OK", "Successful getQuote request.", "Success");
      }, 2000);
    } else if (response.statusText === "WARN") {
      setTimeout(() => {
        refShowNotification.current("WARN", "Warning returned from getQuote request.", "Warning");
      }, 2000);
    } else if (response.statusText === "ERROR") {
      setTimeout(() => {
        refShowNotification.current("ERROR", "Error returned from getQuote request.", "Error");
      }, 2000);
    }
  }

  async function handleEmailSubmit(record) {
    quote.setFormRecord(record);
    const response = await quote.sendEmail();

    if (response.statusText === "OK") {
      setTimeout(() => {
        refShowNotification.current("OK", "Successful sendEmail request.", "Success");
      }, 1000);
    } else if (response.statusText === "WARN") {
      setTimeout(() => {
        refShowNotification.current("WARN", "Warning returned from sendEmail request.", "Warning");
      }, 1000);
    } else if (response.statusText === "ERROR") {
      setTimeout(() => {
        refShowNotification.current("ERROR", "Error returned from sendEmail request.", "Error");
      }, 1000);
    }
  }

  return (
    <div className="lqe-centre-panel__middle">
      <h3>HI2</h3>
      <QuoteForm formRecord={formRecord} handleSubmit={handleSubmit} handleEmailSubmit={handleEmailSubmit}></QuoteForm>
    </div>
  )
}
