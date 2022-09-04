import { $host, $authHost } from "http/config";

export default class userService {
  static async login(data) {
    return await $host.post('/api/user/login', data)
  }
  static async logout() {

  }
  static async register(data) {
    return await $host.post('/api/user/registration', data)
    }
  static checkRole(user) {

  }
  static refreshToken() {

  }
  static async checkToken() {
    console.log('Checking token...')
    return await $authHost.get('/api/user/auth');
}
}