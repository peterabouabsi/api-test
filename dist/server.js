"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_server_1 = __importDefault(require("./app/app.server"));
//env config
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `config/.env.${process.env.NODE_ENV}` });
const server = http_1.default.createServer(app_server_1.default);
const port = process.env.PORT || 1000;
server.listen(port, () => console.log(`listening on port ${port}`));
//# sourceMappingURL=server.js.map