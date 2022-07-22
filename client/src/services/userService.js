import { $host, $authHost } from "http/config";

export default class userService {
  static async login(data) {
    const response = await $host.post('/api/user/login', data)
    localStorage.setItem("token", response.data.token)
      return response.data.token
  }
  static async logout() {

  }
  static async register(data) {
    const response = await $host.post('/api/user/registration', data)
    try {
      return response.data.token
    } catch(e) {
      alert(e);
    }
    }
  static checkRole(user) {

  }
  static refreshToken() {

  }
  static async checkToken() {
    console.log('Checking token...')
    try {
      const {data} = await $authHost.get('/api/user/auth');
      localStorage.setItem('token', data.token)
    }
    catch (e) {
      // localStorage.clear();
      console.log(e.message)
    }
  }
}