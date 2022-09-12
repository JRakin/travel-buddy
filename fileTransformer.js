const path = require("path");

module.exports = {
  process(sourceText, fileName, sourcePath, options) {
    return {
      code: `module.exports = ${
        JSON.stringify(path.basename(fileName)) + ";"
      };`,
    };
  },
};
