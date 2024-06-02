import http from 'http';
import app from "./app/app.server";

//env config
import dotenv from 'dotenv';
dotenv.config({ path: `config/.env.${process.env.NODE_ENV}` })

const server = http.createServer(app);
const port: string | number = process.env.PORT || 1000;
const host: any = '40.71.24.99';
server.listen(port, host, () => console.log(`listening on http://${host}:${port}`));