import ApiClient from './ApiClient'

export const __LoginUser = async (userData) => {
    console.log('User Data', userData)
    try {
      const res = await ApiClient.post('/team/login', userData)
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      return res.data
    } catch (error) {
      throw error
    }
  }

 