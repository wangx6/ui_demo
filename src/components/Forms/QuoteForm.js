import React, { useState } from 'react'
import Button from "../Button/Button"

export default function QuoteForm({formRecord, handleSubmit}) {

    const [record, setRecord] = useState(formRecord.inputs);

    console.log(record);
    
    const onClickFormSubmit = (event) => {
        if (handleSubmit && typeof handleSubmit === 'function')
            handleSubmit(record);
    }

    const onClickEmailSubmit = (event) => {

    }

    const onChangeFirstName = (event) => {
       console.log(event.target.value);
       setRecord({...record, firstName: event.target.value});
    }

    const onChangeLastName = (event) => {
        console.log(event.target.value);
        setRecord({...record, lastName: event.target.value});
     }

     const onChangeDob = (event) => {
        console.log(event.target.value);
        setRecord({...record, dob: event.target.value});
     }
     
     const onChangeTerm = (event) => {
        console.log(event.target.value);
        setRecord({...record, term: event.target.value});
     }

    return (
        <div>
            <div>
                <input onChange={onChangeFirstName} className="form-control" value={record.firstName}  placeholder="first name" />
                <input onChange={onChangeLastName} className="form-control" value={record.lastName}  placeholder="last name" />
                <input onChange={onChangeDob} className="form-control" value={record.dob}  placeholder="dob" />
                <input onChange={onChangeTerm} className="form-control" value={record.term}  placeholder="term" />
                <Button handleClick={onClickFormSubmit} text="Get a Quote Now"/>
            </div>

            <div>
                <input className="form-control" defaultValue={record.email}  placeholder="email" />
                <button onClick={onClickEmailSubmit}>
                    Send Email
                </button>
            </div>
        </div>

    )

}
