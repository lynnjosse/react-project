import React from 'react'
import PropTypes from 'prop-types'


const HeaderCardComponent = ({name}) => (
    <div className = "panel panel-default">
        <div className = "panel-body">
            <span className = "h2">
                <span className="fa fa-bicycle text-primary" aria-hidden="true" /> &nbsp; &nbsp;
                {name}
            </span>
        </div>
    </div>
  )


HeaderCardComponent.displayName = 'HeaderCardComponent'

//this tells the implementers what they should have for it to work. it's a contract.
HeaderCardComponent.propTypes = {
  name: PropTypes.string.isRequired
}

export default HeaderCardComponent
