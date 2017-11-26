import mongoose from './dbConnection';

let Schema = mongoose.Schema;
let reviewSchema = new Schema({
  productId: {
    type: Number,
    required: true
  },
  reviews: [{
    userId: {
      type: Number,
      required: true
    },
    review: {
      type: String,
      required: true
    }
  }]
});

let Review = mongoose.model('Review', reviewSchema);

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

mongoose.connection.once('open', function() {
  mongoose.connection.db.listCollections().toArray((err, list) => {
    if (list.length) {
      if (!list.find(collection => collection.name === 'reviews')) {
        console.log('no review');
        Review.create(defaultProductsReviews);
      }
      console.log('review');
    } else {
      console.log('no review');
      Review.create(defaultProductsReviews);
    }
  });
});

export default Review;
