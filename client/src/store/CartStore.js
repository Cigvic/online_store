import {makeAutoObservable} from "mobx";

export default class CartStore {
  constructor() {
    this._products = {}
    makeAutoObservable(this)
  }
  setProducts(item) {
    this._products = {...this._products, [item.id]: item}
  }
  get count() {
    return Object.keys(this._products).length
  }
  get products() {
    return this._products
  }
}