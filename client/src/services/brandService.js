import { $host } from "http/config";

export default class brandService {
  static async getAll() {
    return await $host.get("/api/brand");
  }
  static async createBrand(data) {
    return await $host.post("/api/brand", data);
  }
  static async deleteBrand(data) {
    return await $host.delete("/api/brand", {data});
  }
}
