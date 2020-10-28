import productService from '../services/productService';

class ProductController {
  static async addProduct(req, res) {
    const { name, quantity } = req.body;
    const { product, isNew } = await productService.addProduct(name, quantity);

    if (isNew) {
      return res.status(201).json({
        product,
      });
    }
    return res.status(409).json({
      error: 'Product with this name already exist'

    });
  }
}

export default ProductController;
