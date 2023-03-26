import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import ProductApi from '../api/productApi';

const productQlSchema = buildSchema (`
    input ProductInput {
        name: String, 
        price: Float, 
        description: String, 
        img: String,
        stock: Float
    }
    type Product {
        id: ID!
        name: String, 
        price: Float, 
        description: String, 
        img: String,
        stock: Float
    }
    type Query {
        getProducts: [Products]
    }
    type Mutation {
        createNewProduct(data: ProductInput) : Product, 
        updateProduct(id: !ID, data: ProductInput) : Product, 
    }

`)

export default class GraphQLController {
    constructor() {
        const api = new ProductApi();
        return graphqlHTTP ({
            schema: productQlSchema, 
            rootValue: {
                getProducts: api.getProducts,
                saveProduct: api.saveProduct, 
                deleteProduct: api.deleteById, 
                deleleteAllProducts: api.deleteAll, 
                updateProduct: api.updateProduct
            }, 
            graphiql: true, 
        })
        }
    }