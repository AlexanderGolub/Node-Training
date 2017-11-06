export default function queryParser(req, res, next) {
  const queryString = req.url.split('?')[1];
  const queryObject = {};

  if (queryString) {
    queryString.split('&').forEach((parameter) => {
      const parameterParts = parameter.split('=');
      queryObject[parameterParts.shift().trim()] = decodeURI(parameterParts.join('='));
    });
  }
  
  req.parsedQuery = queryObject;
  next();
}