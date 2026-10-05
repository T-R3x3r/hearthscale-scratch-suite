const path = require('node:path');

module.exports = {
  tools: {
    tidy: (args) => ({ text: path.basename(String(args.name)).replace(/\s+/g, '-').toLowerCase() }),
  },
};
