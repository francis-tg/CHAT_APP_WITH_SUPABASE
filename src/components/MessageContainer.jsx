import React from 'react'
import PropTypes from 'prop-types';
function MessageContainer({element}) {
  return (
    <div className='message-container'>
        {element}
    </div>
  )
}

MessageContainer.prototype = {
    element : PropTypes.node.isRequired
}

export default MessageContainer
