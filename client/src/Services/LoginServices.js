import ApiClient from './ApiClient'

export const __LoginUser = async (userInf) => {
    console.log('User Inf', userInf)
    try {
      const res = await ApiClient.post('/team/login', userInf)
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      return res.data
    } catch (error) {
      throw error
    }
  }

 