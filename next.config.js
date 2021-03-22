const withImages = require("next-images");
const getRoutes = require("./getRoutes");

module.exports = withImages({
    trailingSlash: true,
    exportPathMap: getRoutes,
});
