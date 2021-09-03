import MongoProductRepository from '../index';

import mocks from './mocks.json';

describe('MongoProductRepository', () => {
  let mongoProductRepository: MongoProductRepository;
  const productSchema = {
    find: jest.fn().mockResolvedValue(mocks),
  };

  beforeEach(() => {
    mongoProductRepository = new MongoProductRepository(productSchema);
  });

  it('should return a product entity', async () => {
    const response = await mongoProductRepository.getProducts();
    expect(response).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          price: expect.any(Number),
          pictures: expect.any(Array),
        }),
      ])
    );
  });
});
