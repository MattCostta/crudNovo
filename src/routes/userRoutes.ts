import { Router } from "express";
import {createUserController, getUserController } from "../controller/userController";
import createPlanoController from "../controller/planoController";





const router = Router();

const autenticarToken = require('../../token');

router.get('/users', getUserController)


router.post("/users", createUserController);

router.post('/planos', createPlanoController);
export default router;
