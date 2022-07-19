import axios from "axios";

export default class ProductService {
  static async getAll () {
    try {
      const response = await axios.get('https://dummyjson.com/products?_limit=10');
      return response.data
    }
    catch (e) {
      console.log(e)
    }
    
  }

  static async get(count) {

  }
}