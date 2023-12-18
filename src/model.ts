// import client from "./database";
// import{
//     name,
//     email,
//     message
// } from "./server";
// //Valeurs sur lesquels je vais m'appuyer pour communiquer avec la bdd
// export async function messageSend(currentDate: Date): Promise<void> {

//     try{
//         const query = "INSERT INTO forms (name, email, message) VALUES ($1, $2, $3)";
//         const values = [
//             name,
//             email,
//             message,
//             currentDate
//         ];

//         await client.query(query, values);
//         console.log("Data inserted successfully");

//     } catch (error) {

//         console.error("Error inserting data", error);
//         throw error; // Propager l'erreur pour la gérer dans la route
//     }


// }