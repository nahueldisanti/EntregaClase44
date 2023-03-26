import Product from "../model/product.model";
import ProductsDAO from '../dao/productsDAO.js'
import crypto from 'crypto'

export default class ProductApi {
    constructor() {
        this.productsDAO = new ProductsDAO();
    }

    getProducts = () => {
        return this.productsDAO.getProducts();
    }

    updateProduct = ({id, product}) => {
        return this.productsDAO.updateById(id, product)
    }

    saveProduct = ({product}) =>{
        const id = crypto.randomBytes(10).toString('hex')
        const newProduct = new Product(id, product)
        this.productsDAO.save(newProduct)
        return newProduct
    }

    deleteById = ({id}) => {
        return this.productsDAO.deleteById(id)
    }

    deleteAll = () => {
        return this.productsDAO.deleteAll();
    }

}