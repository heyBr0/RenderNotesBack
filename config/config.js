const allowedResources = require("./allowedResources");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedResources.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      throw new Error("Not allowed by CORS");
    }
  },

  credentials: true,
  optionsSuccessStatus: 200,
};


module.exports = corsOptions