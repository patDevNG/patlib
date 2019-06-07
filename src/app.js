import express from 'express';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import '@babel/polyfill/noConflict';
import api from './api/api';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(morgan('dev'));

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Welcome to patrovys');
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server Started at Port : ${PORT}`);
});
