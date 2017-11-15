const defaultProductsList = [
  {id: 1, name: 'product1'},
  {id: 2, name: 'product2'},
  {id: 3, name: 'product3'},
  {id: 4, name: 'product4'}
];

const defaultProductsReviews = [
  {
    productId: 1,
    reviews: [
      {userId: 1, review: 'good'}
    ]
  },
  {
    productId: 2,
    reviews: [
      {userId: 1, review: 'good'},
      {userId: 2, review: 'bad'},
      {userId: 3, review: 'ugly'}    
    ]
  },
  {
    productId: 3,
    reviews: [
      {userId: 1, review: 'good'},
      {userId: 2, review: 'bad'}
    ]
  }
];

class Product {
  constructor() {
    this.productsList = defaultProductsList;
    this.productsReviews = defaultProductsReviews;
  }

  getProducts() {
    return this.productsList;
  }

  getReviews() {
    return this.productsReviews;
  }

  addProduct(product) {
    this.productsList.push(product);
  }
}

export default new Product();
