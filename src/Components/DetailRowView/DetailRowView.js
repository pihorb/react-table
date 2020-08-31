import React from 'react'
import './DetailRowView.css'

const DetailRowView = ({ person }) => {
  return (
    <div>
      <p>
        Selected user <b>{`${person.firstName} ${person.lastName}`}</b>
      </p>
      <p>
        Description <br />
        <textarea defaultValue={person.description} />
      </p>
      <p>
        Address: <b>{person.address.streetAddress}</b>
      </p>
      <p>
        City: <b>{person.address.city}</b>
      </p>
      <p>
        State: <b>{person.address.state}</b>
      </p>
      <p>
        Index: <b>{person.address.zip}</b>
      </p>
    </div>
  )
}

export default DetailRowView
