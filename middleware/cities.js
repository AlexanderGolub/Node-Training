import models from '../modelsMongo';

function getAllCities(req, res) {
  models.City.find((err, cities) => {
    res.json(cities);
  });
}

function createCityInfo(req, res) {
  const reqInfo = req.body;
  const cityInfo = new models.City(reqInfo);

  cityInfo.lastModifiedDate = new Date();

  cityInfo.save(() => {
    res.json(cityInfo);
  });
}

function updateCityInfo(req, res) {
  const cityId = Number(req.params.id);
  const reqInfo = req.body;

  models.City.findOne({id: cityId}, (err, city) => {
    if (!city) {
      req.body.id = cityId;
      createCityInfo(req, res);
    } else {
      for (let field in reqInfo) {
        city[field] = reqInfo[field];
      }
  
      city.lastModifiedDate = new Date();
  
      city.save(() => {
        res.json(city);
      });
    }
  });
}

function deleteCityInfo(req, res) {
  const cityId = Number(req.params.id);

  models.City.findOne({id: cityId}).remove(() => {
    res.send('Deleted');
  });
}

export default {getAllCities, createCityInfo, updateCityInfo, deleteCityInfo};
