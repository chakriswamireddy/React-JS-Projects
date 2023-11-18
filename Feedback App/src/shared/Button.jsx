<<<<<<< HEAD
import React from 'react'
import PropTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
  return (
    <div>
        <button type={type} disabled={isDisabled} className={`btn-${version}`}>
            {children}
        </button>
    </div>
  )
}

Button.defaultProps = {
    version: 'primary',
    type:'button',
    isDisabled: false,

}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    version: PropTypes.string,
    type:PropTypes.string,
    isDisabled: PropTypes.bool,

}

=======
import React from 'react'
import PropTypes from 'prop-types'

function Button({children,version,type,isDisabled}) {
  return (
    <div>
        <button type={type} disabled={isDisabled} className={`btn-${version}`}>
            {children}
        </button>
    </div>
  )
}

Button.defaultProps = {
    version: 'primary',
    type:'button',
    isDisabled: false,

}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    version: PropTypes.string,
    type:PropTypes.string,
    isDisabled: PropTypes.bool,

}

>>>>>>> 2fe6d129981b1950b4f1ed8ab95613ed0466252c
export default Button