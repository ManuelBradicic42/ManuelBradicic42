const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://manuelbradicic42.github.io/" // "https://github.com/hashirshoaeb/hashirshoaeb.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
