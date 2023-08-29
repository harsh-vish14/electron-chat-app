import addNotification from 'react-push-notification'

const pushNotification = (title, message) => {
  addNotification({
    title: title,
    message: message,
    theme: 'darkblue',
    native: true, // when using native, your OS will handle theming.
    icon: ''
  })
}

export default pushNotification
