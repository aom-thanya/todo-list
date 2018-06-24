import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './index.scss'

const IconCircle = ({ children, isChecked, size, fontSize, onClick, id, className, style }) => {
  return (
    <div
      id={id}
      className={`bo-common-iconcircle ${className}`}
      style={style}
    >
      <div
        className="wrapper-circle"
        style={{ width: size, height: size }}
        onClick={() => onClick()}
      >
        <span
          className={classnames('wrapper-icon', { 'iconcircle-active': isChecked })}
          style={{ fontSize }}>
          {children}
        </span>
      </div>
    </div>
  )
}

IconCircle.defaultProps = {
  isChecked: false,
  size: 20,
  fontSize: 12,
  onClick: () => { },
  id: '',
  className: ''
}

IconCircle.propTypes = {
  children: PropTypes.any,
  isChecked: PropTypes.bool,
  size: PropTypes.number,
  fontSize: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.func
}

export default IconCircle
