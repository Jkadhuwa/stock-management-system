import db from '../sequelize/models';

class ProductService {
  static async addProduct(name, quantity) {
    const [product, isNew] = await db.Product.findOrCreate({
      where: { name },
      defaults: {
        name,
        quantity
      }
    });
    return ({ product, isNew });
  }
}

export default ProductService;
