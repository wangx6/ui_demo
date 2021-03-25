import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function QuoteForm({
  formRecord,
  handleSubmit,
  handleEmailSubmit,
}) {
  const [record, setRecord] = useState(formRecord.inputs);

  /*
      useEffect(() => {
      setRecord(formRecord);
      setErrors(errors);

      }, [formRecord, errors]);
  */

  const onClickFormSubmit = () => {
    console.log(record);
    if (handleSubmit && typeof handleSubmit === "function")
      handleSubmit(record);
  };

  const onClickEmailSubmit = () => {
    console.log(record);
    if (handleEmailSubmit && typeof handleEmailSubmit === "function")
      handleEmailSubmit(record);
  };

  const onChangeFirstName = (event) => {
    console.log(event.target.value);
    setRecord({ ...record, firstName: event.target.value });
  };

  const onChangeLastName = (event) => {
    console.log(event.target.value);
    setRecord({ ...record, lastName: event.target.value });
  };

  const onChangeDob = (event) => {
    console.log(event.target.value);
    setRecord({ ...record, dob: event.target.value });
  };

  const onChangeTerm = (event) => {
    console.log(event.target.value);
    setRecord({ ...record, term: event.target.value });
  };

  return (
    <div>
      <div>
        <input
          onChange={onChangeFirstName}
          className="form-control"
          value={record.firstName}
          placeholder="first name"
        />
        <input
          onChange={onChangeLastName}
          className="form-control"
          value={record.lastName}
          placeholder="last name"
        />
        <input
          onChange={onChangeDob}
          className="form-control"
          value={record.dob}
          placeholder="dob"
        />
        <input
          onChange={onChangeTerm}
          className="form-control"
          value={record.term}
          placeholder="term"
        />
        <button onClick={onClickFormSubmit}>Get a Quote Now</button>
      </div>

      <div>
        <input
          className="form-control"
          defaultValue={record.email}
          placeholder="email"
        />
        <button onClick={onClickEmailSubmit}>Send Email</button>
      </div>
    </div>
  );
}

QuoteForm.propTypes = {
  formRecord: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleEmailSubmit: PropTypes.func,
}
