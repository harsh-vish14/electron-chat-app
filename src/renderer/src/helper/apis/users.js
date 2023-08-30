import axios from 'axios'

const userInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1/user',
  headers: {
    'Content-Type': 'application/json',
    token: localStorage.getItem('token') || null
  }
})

export const userSignUp = async (body) => {
  try {
    const response = await userInstance.post('/signup', {
      ...body
    })

    localStorage.setItem('token', response.data.token)

    return { ...response.data }
  } catch (error) {
    console.log(error)
    return { ...error.response.data }
  }
}

export const userSignIn = async (body) => {
  try {
    const response = await userInstance.post('/login', {
      ...body
    })

    localStorage.setItem('token', response.data.token)

    return { ...response.data }
  } catch (error) {
    console.log(error)
    return { ...error.response.data }
  }
}
