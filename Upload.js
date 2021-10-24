var ghpages = require("gh-pages");

ghpages.publish(
    "dist",
    {
        dotfiles: true,
        branch: "gh-pages",
        repo: "https://github.com/BeamKunGzMARK/Udemy_FreeCourses.git",
    },
    function (err) {
        console.log();
    }
);
