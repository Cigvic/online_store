import { $host } from "http/config";
import jwt_decode from 'jwt-decode';

export default class userService {
  static async login(data) {
    const response = await $host.post('/api/user/login', data)
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
  static checkToken() {

  }
}