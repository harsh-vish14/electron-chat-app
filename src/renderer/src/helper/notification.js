import addNotification from 'react-push-notification'
import logo from '../assets/images/icons.svg'

const pushNotification = (title, message) => {
  addNotification({
    title: title,
    message: message,
    theme: 'darkblue',
    native: true, // when using native, your OS will handle theming.
    icon: logo
  })
}

export default pushNotification
