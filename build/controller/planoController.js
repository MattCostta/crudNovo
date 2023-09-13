"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const planoService_1 = require("../service/planoService");
const createPlanoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, descricao, valor, userId } = req.body;
        const newPlano = yield (0, planoService_1.criarPlano)(nome, descricao, valor, userId);
        return res.status(201).json(newPlano);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
});
exports.default = createPlanoController;
