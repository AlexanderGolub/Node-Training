import {cityMiddleware} from '../middleware';

function getAllCities(req, res) {
  cityMiddleware.getAllCities(req, res);
}

function createCityInfo(req, res) {
  cityMiddleware.createCityInfo(req, res);
}

function updateCityInfo(req, res) {
  cityMiddleware.updateCityInfo(req, res);
}

function deleteCityInfo(req, res) {
  cityMiddleware.deleteCityInfo(req, res);
}

export default {getAllCities, createCityInfo, updateCityInfo, deleteCityInfo};
