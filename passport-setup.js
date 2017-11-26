import passport from 'passport';
import LocalStrategy from 'passport-local';
import FacebookStrategy from 'passport-facebook';
import TwitterStrategy from 'passport-twitter';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import models from '../modelsMongo';
import {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} from './config/securityConfig';

const serverAdress = `http://localhost:${ process.env.PORT || 3535 }`;

const LocalStrategyConfig = {
  usernameField: 'login',
  passwordField: 'password',
  session: false
};

const localStrategy = new LocalStrategy(LocalStrategyConfig, (username, password, done) => {
  models.User.findOne({
    login: username,
    password: password
  }, (err, userInfo) => {
    if (!userInfo) {
      done(null, false, 'wrong login or password');
    } else {
      done(null, userInfo);
    }
  });
});

const FacebookStrategyConfig = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: `${serverAdress}/api/auth/facebook/callback`,
  session: false
};

const facebookStrategy = new FacebookStrategy(
  FacebookStrategyConfig,
  (accessToken, refreshToken, profile, done) => {
    console.log({
      accessToken,
      refreshToken,
      profile
    });

    return done(null, profile);
  }
);

const TwitterStrategyConfig = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: `${serverAdress}/api/auth/twitter/callback`
};

const twitterStrategy = new TwitterStrategy(
  TwitterStrategyConfig,
  (accessToken, tokenSecret, profile, done) => {
    console.log({
      accessToken,
      tokenSecret,
      profile
    });

    return done(null, profile);
  }
);

const GoogleStrategyConfig = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${serverAdress}/api/auth/google/callback`,
  session: false
};

const googleStrategy = new GoogleStrategy(
  GoogleStrategyConfig,
  (accessToken, refreshToken, profile, cb) => {
    console.log({
      accessToken,
      refreshToken,
      profile
    });

    return cb(null, profile);
  }
);

passport.use(localStrategy);
passport.use(facebookStrategy);
passport.use(twitterStrategy);
passport.use(googleStrategy);

export default passport;
