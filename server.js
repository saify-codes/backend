import express from 'express';
import dotenv from 'dotenv';
import './database/mongo.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import web from './routes.js';
dotenv.config();

const app = express();
const port = 5000;
const allowedOrigins = eval(process.env.ALLOW_ORIGINS); // parsing string to array

// Middlewares
app.use(cookieParser());
app.use(cors({ credentials: true, origin: allowedOrigins }));
app.use(express.json())
app.use(web);

app.listen(port, () => {
  console.log(`listening on http:localhost:${port}`);
});
