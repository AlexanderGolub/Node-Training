export default function cookieParser(req, res, next) {
  const cookieObject = {};

  const cookies = req.headers.cookie;

  if (cookies) {
    cookies.split(';').forEach((cookie) => {
      const cookieParts = cookie.split('=');
      cookieObject[cookieParts.shift().trim()] = decodeURI(cookieParts.join('='));
    });
  }

  req.parsedCookies = cookieObject;

  next();
}