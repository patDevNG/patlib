import express from 'express';
import UserController from '../controller/user.controller';
const router = express.Router();

router.post('v1/auth/login', UserController.login);
