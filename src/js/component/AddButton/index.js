import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const AddButton = (props) => {
  const { id, type, name, displayText, value, onChangeHandler, className, required } = props
  return (
    <div className='common-input'>
      <div className='display-text'>
        <span>{value ? displayText : ''}</span>
      </div>
      <input
        id={id}
        className={`input-box ${className}`}
        type={type}
        name={name}
        placeholder={displayText}
        value={value}
        required={required}
        onChange={e => onChangeHandler(e.target.value)} />
    </div>
  )
}

AddButton.defaultProps = {
  id: 'input',
  type: 'text',
  name: '',
  displayText: '',
  value: '',
  onChangeHandler: () => { },
  className: '',
  required: false
}

AddButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  displayText: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default AddButton