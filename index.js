import express from 'express';

import { bookingRouter } from './routes/all-routes.js';

import mongoose from 'mongoose';
import cors from 'cors'
import 'dotenv/config';

await mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(express.json)

app.use(bookingRouter);                                                             

const PORT = 7079;
app.use(cors())
app.listen(PORT, () => {
    console.log(`Port is working ${PORT}`)
})