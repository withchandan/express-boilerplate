import express from 'express'
import {productList, addProduct} from '../controllers/product'

const router = express.Router()

router.get('/product', productList)

router.post('/product', addProduct)

export default router