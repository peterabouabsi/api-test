"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
//env config
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `config/.env.${process.env.NODE_ENV}` });
exports.Constants = {
    database: {
        host: '',
        port: '',
        username: '',
        password: '',
        dialect: '',
    },
    cors: {
        origin: ["http://server-url", "https://server-url"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Length", "X-Custom-Header"],
        preflightContinue: false
    },
    routes: {
        api: 'api',
        anonymous: 'anonymous',
        authorization: 'authorization'
    }
};
//# sourceMappingURL=constants.js.map