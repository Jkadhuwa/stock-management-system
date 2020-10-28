import express from 'express';
import ProductController from '../controllers/productController';
import validator from '../middleware/validator';

const productRouter = express.Router();


productRouter.post('/', validator.addProductValidation, ProductController.addProduct);

export default productRouter;
