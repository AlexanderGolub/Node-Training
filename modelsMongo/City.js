import mongoose from './dbConnection';

let Schema = mongoose.Schema;
let citySchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  country: String,
  capital: {
    type: Boolean,
    required: true
  },
  location: {
    lat: {
      type: Number,
      min: -90,
      max: 90
    },
    long: {
      type: Number,
      min: -180,
      max: 180
    }
  },
  lastModifiedDate: Date
});

let City = mongoose.model('City', citySchema);

const defaultCities = [
  {
    id: 1,
    name: 'Minsk',
    country: 'Belarus',
    capital: true,
    location: {
      lat: 53.9045,
      long: 27.5615
    },
    lastModifiedDate: new Date()
  },
  {
    id: 2,
    name: 'Warsaw',
    country: 'Poland',
    capital: true,
    location: {
      lat: 52.2297,
      long: 21.0122
    },
    lastModifiedDate: new Date()
  },
  {
    id: 3,
    name: 'Gomel',
    country: 'Belarus',
    capital: false,
    location: {
      lat: 52.4412,
      long: 30.9878
    },
    lastModifiedDate: new Date()
  }
];

mongoose.connection.once('open', function() {
  mongoose.connection.db.listCollections().toArray((err, list) => {
    if (list.length) {
      if (!list.find(collection => collection.name === 'cities')) {
        console.log('no city');
        City.create(defaultCities);
      }
      console.log('city');
    } else {
      console.log('no city');
      City.create(defaultCities);
    }
  });
});

export default City;
