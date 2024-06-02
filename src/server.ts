import http from 'http';
import app from "./app/app.server";

//env config
import dotenv from 'dotenv';
dotenv.config({ path: `config/.env.${process.env.NODE_ENV}` })

const server = http.createServer(app);
const port: string | number = process.env.PORT || 1000;
server.listen(port, () => console.log(`listening on port ${port}`));