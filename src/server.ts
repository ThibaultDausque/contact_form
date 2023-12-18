// import express, { Express, Request, Response, Application } from "express";
// import dotenv from "dotenv";
// dotenv.config();

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


import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur mon serveur TypeScript !');
});

app.listen(port, () => {
  console.log("Le serveur écoute sur le port ${port}");
});












