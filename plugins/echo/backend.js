'use strict';
const { defineApp, tool, p } = require('@hearthscale/app');
module.exports = defineApp({ tools: [tool('echo', { text: p.string() }, async ({ text }) => text)] });
