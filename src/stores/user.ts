// stores/user.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    userInfo: null,
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await axios.post('/api/login', {
          username,
          password,
        })
        const { token } = response.data.token
        this.token = token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        return response.data
      } catch (error) {
        console.error('Login failed:', error)
        throw new Error('Login failed, please check your credentials.')
      }
    },
    logout() {
      this.token = null
      this.userInfo = null
      delete axios.defaults.headers.common['Authorization']
    },
  },
})
