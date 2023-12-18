"use strict";
// import express, { Express, Request, Response, Application } from "express";
// import dotenv from "dotenv";
// dotenv.config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import bodyParser from "body-parser";
// import client from "./database";
// const router = express.Router();
// //pour le docker:
// //docker build -t nomimage . pour créer l'image
// //docker-compose up pour créer les container
// export const port = process.env.PORT||8000;
// const app: Application = express();
// app.use(bodyParser.json());
// app.set("view engine", "pug");
// app.set("views", "./src/views");
// app.listen(port, () => {
//   console.log("Server is Fire at http://localhost:" + port + "/form");
// });
// app.get("/form", (req: Request, res: Response) => {
//   res.render("form", { pageTitle: "Form"});
// });
// export let name: string;
// export let email: string;
// export let message: string;
// export let currentDate: Date;
// app.get("/postForm", async (req: Request, res: Response) => {
//   name = req.query.name as string;
//   email = req.query.email as string;
//   message = req.query.message as string;
//   //Insérer l'utilisateur dans la base de données
//   client.save((error: String) => {
//     if(error) {
//       res.status(500).send(error);  
//     } else {
//       res.status(200).send({ message: 'Message envoyé avec succès'});
//     }
//   });
// });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur TypeScript !');
});
app.listen(port, () => {
    console.log("Le serveur écoute sur le port ${port}");
});
