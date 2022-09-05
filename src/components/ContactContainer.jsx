import PropTypes from 'prop-types';

function ContactContainer({element}) {
  return (
    <div className='contact-container'>{element}</div>
  )
}

ContactContainer.prototype = {
    element: PropTypes.node.isRequired
}

export default ContactContainer