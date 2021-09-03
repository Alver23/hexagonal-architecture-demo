import ProductRepository from '@backend/api/products/domain/repositories/product';

import ProductsListCommand from '../index';

describe('ProductsListCommand', () => {
  const mockData = [{ id: 1 }];
  const productRepository: ProductRepository = {
    getProducts: jest.fn().mockResolvedValue(mockData),
  };

  let productListCommand: ProductsListCommand;

  beforeEach(() => {
    productListCommand = new ProductsListCommand(productRepository);
  });

  it('should return a product list', async () => {
    const response = await productListCommand.execute();
    expect(response).toEqual(mockData);
    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
        }),
      ])
    );
  });
});
