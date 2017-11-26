import mongoose from './dbConnection';

let Schema = mongoose.Schema;
let productSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastModifiedDate: Date
});

let Product = mongoose.model('Product', productSchema);

const defaultProductsList = [
  {id: 1, name: 'product1', lastModifiedDate: new Date()},
  {id: 2, name: 'product2', lastModifiedDate: new Date()},
  {id: 3, name: 'product3', lastModifiedDate: new Date()},
  {id: 4, name: 'product4', lastModifiedDate: new Date()},
];

mongoose.connection.once('open', function() {
  mongoose.connection.db.listCollections().toArray((err, list) => {
    if (list.length) {
      if (!list.find(collection => collection.name === 'products')) {
        console.log('no product');
        Product.create(defaultProductsList);
      }
      console.log('product');
    } else {
      console.log('no product');
      Product.create(defaultProductsList);
    }
  });
});

export default Product;
