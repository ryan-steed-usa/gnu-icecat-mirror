const targets = [
  "www.reddit.com",
  "np.reddit.com",
  "new.reddit.com",
  "amp.reddit.com",
  "i.redd.it",
  "redd.it",
];
const redirects = [
  // libreddit: privacy w/ modern UI
  "https://safereddit.com",
  "https://libreddit.kavin.rocks",
  "https://reddit.rtrace.io",
  "https://libreddit.projectsegfau.lt",
  "https://libreddit.bus-hit.me",
  "https://snoo.habedieeh.re",
  "https://redlib.pussthecat.org",
  "https://redlib.northboot.xyz",
  "https://redlib.kylrth.com",
  "https://lr.artemislena.eu",
  "https://old.reddit.com", // desktop
  "http://red.lpoaj7z2zkajuhgnlltpeqh3zyq7wk2iyeggqaduhgxhyajtdt2j7wad.onion",
  "http://snoo.habeehrhadazsw3izbrbilqajalfyqqln54mrja3iwpqxgcuxnus7eid.onion",
];
const bypassPaths = /\/(gallery\/poll\/rpan\/settings\/topics)/;

export default {
  targets,
  redirects,
  bypassPaths,
};
