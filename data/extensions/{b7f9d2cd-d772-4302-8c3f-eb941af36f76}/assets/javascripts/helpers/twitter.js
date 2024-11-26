/*
    Please remember to also update the src/manifest.json file 
    (content_scripts > matches, 'remove-twitter-sw.js') 
    when updating this list:
  */
const targets = [
  "x.com",
  "mobile.x.com",
  "twitter.com",
  "www.twitter.com",
  "mobile.twitter.com",
  "pbs.twimg.com",
  "video.twimg.com",
];
/*
    Please remember to also update the 
    src/assets/javascripts/remove-twitter-sw.js file 
    (const nitterInstances) when updating this list:
  */
const redirects = [
  "https://nitter.privacydev.net",
  "http://nitter.pjsfkvpxlinjamtawaksbnnaqs2fc2mtvmozrzckxh7f3kis6yea25ad.onion",
  "http://nitter.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion",
];

export default {
  targets,
  redirects,
};
