import express from 'express';
import ProductController from '../controllers/productController';
import validator from '../middleware/validator';
import verifyToken from '../middleware/userAuth';
import grantAccess from '../middleware/permisions';

const productRouter = express.Router();


productRouter.post('/', [verifyToken, grantAccess('createAny', 'product'), validator.addProductValidation], ProductController.addProduct);

export default productRouter;
