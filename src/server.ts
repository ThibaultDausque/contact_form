import express, { Request, Response } from 'express';
import { Client } from 'pg';
import bodyParser from 'body-parser';
import * as path from 'path';


const mydb = ({
  user: 'adminuser',
  host: 'postgresdb',
  database: 'mydatabase',
  password: 'adminpassword',
  port: 5432
});


const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", 'pug');
app.set("views", "./src/views");

app.use(express.static(path.resolve(process.cwd(), 'src', 'public')));

app.get("/form", (req: Request, res: Response) => {
  res.render("form", { pageTitle: "Form" });
});

app.post("/form", async (req: Request, res: Response) => {
  const client = new Client(mydb);
  try{
    await client.connect();

    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    const nameRegex = /^[a-zA-Z\-]{1,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^.{1,400}$/;

    if(!nameRegex.test(name)){
      return res.status(400).send('Le prénom est invalide');
    }

    if(!emailRegex.test(email)){
      return res.status(400).send('L\'email est invalide');
    }

    if(!messageRegex.test(message)){
      return res.status(400).send('Le message est invalide');
    }

    const insertValue = `INSERT INTO forms (name, email, message)
    VALUES ($1, $2, $3)`;
    const values = [name, email, message];

    await client.query(insertValue, values);
    console.log('Nouvel enregistrement créé avec succès');
    res.send('Nouvel enregistrement créé avec succès');

    

  } catch (err) {
    console.error('Erreur lors de l\'insertion des données :', err);
    res.status(500).send(`Erreur lors de l'insertion des données : ${err}`);
    
  } finally {

    await client.end();
  }

});

app.listen(port, () => {
  console.log("Server is Fire at http://localhost:" + port + "/form");
});


//mettre pug dans un dossier views
//le css dans un dossier public



