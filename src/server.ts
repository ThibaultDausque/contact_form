import express, { Request, Response } from 'express';
import { Client } from 'pg';

const mydb = ({
  user: 'adminuser',
  host: 'postgresdb',
  database: 'mydatabase',
  password: 'adminpassword',
  port: 5432
});


const app = express();
const port = 8000;

app.set("view engine", "pug");
app.set("views", "./src/views");

app.get("/form", (req: Request, res: Response) => {
  res.render("form", { pageTitle: "Form" });
});

app.post("/form", async (req: Request, res: Response) => {
  const client = new Client(mydb);
  try{
    await client.connect();

    let name = req.body.name as String;
    let email = req.body.email as String;
    let message = req.body.message as String;

    const insertValue = `INSERT INTO forms (name, email, message)
    VALUES ($1, $2, $3)`;
    const values = [name, email, message];

    await client.query(insertValue, values);
    console.log('Nouvel enregistrement créé avec succès');
    res.send('Nouvel enregistrement créé avec succès');

    

  } catch (err) {
    console.error('Erreur lors de l\'insertion des données :', err);
    res.status(500).send(`Erreur lors de l'insertion des données : ${err}`);
    
  }

});

app.listen(port, () => {
  console.log("Server is Fire at http://localhost:" + port + "/form");
});




