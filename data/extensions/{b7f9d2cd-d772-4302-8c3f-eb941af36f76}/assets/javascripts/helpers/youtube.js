const targets = [
  "m.youtube.com",
  "youtube.com",
  "img.youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
  "youtu.be",
  "s.ytimg.com",
  "music.youtube.com",
  "piped.video",
];
/*
    Please remember to also update the manifest.json file
    (content_scripts > matches, 'persist-invidious-prefs.js')
    when updating this list:
  */
const redirects = [
  "https://yewtu.be",
  "https://yt.artemislena.eu",
  "https://invidious.flokinet.to",
  "https://invidious.privacydev.net",
  "https://iv.melmac.space",
  "https://inv.nadeko.net",
  "https://inv.tux.pizza",
  "https://invidious.protokolla.fi",
  "https://yt.drgnz.club",
  "https://inv.us.projectsegfau.lt",
  "https://invidious.jing.rocks",
  "https://invidious.reallyaweso.me",
  "https://invidious.materialio.us",
  "http://ng27owmagn5amdm7l5s3rsqxwscl5ynppnis5dqcasogkyxcfqn7psid.onion",
  "http://invidious.g4c3eya4clenolymqbpgwz3q3tawoxw56yhzk4vugqrl6dtu3ejvhjid.onion",
  "http://inv.nadekonw7plitnjuawu6ytjsl7jlglk2t6pyq6eftptmiv3dvqndwvyd.onion",
];

export default {
  targets,
  redirects,
};
