"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
//Constants
const constants_1 = require("../shared/models/constants");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(constants_1.Constants.cors));
app.get('/', (req, res) => {
    res.send([{ id: 1 }]);
});
const index_routes_1 = __importDefault(require("./routes/index.routes"));
app.use(constants_1.Constants.routes.api, index_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.server.js.map