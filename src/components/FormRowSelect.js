import React from 'react'

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select name={name} id={name} value={value} onChange={handleChange} className='form-select'>
        {list.map((itemvalue, index) => {
          return (
            <option value={itemvalue} key={index}>{itemvalue}</option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect