"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vite.config.js
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
exports.default = (0, vite_1.defineConfig)({
    base: '/TerraBloom/',
    plugins: [(0, plugin_react_1.default)()],
});
