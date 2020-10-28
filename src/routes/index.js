import express from 'express';
import userRouter from './userRouter';
import productRouter from './productRouter';


const router = express();


router.get('/', (req, res) => res.status(200).json({
  message: 'Server Running successfully',
}));
router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
