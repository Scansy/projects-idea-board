import express, { type Request, type Response } from 'express';
import cors from 'cors';

const app = express();
const PORT: number = 6767;

app.use(cors({ origin: 'http://localhost:3000' }));

//le listen
app.get('/', (req: Request, res: Response) => {
    res.send('Skibidi Ohio');
});

//something random
app.get('/sixseven', (req: Request, res: Response) => {
    res.send('SIX SEVEN SIX SEVEN')
});

//post the project thing, so i think we have to start storing this somewhere
app.post("/api/post", (req, res) => {
    //if something is wrong send bad http status

    //if everything is good send good http status plus push this in a database? 
    //i say use postgreSQL cuz its the goat apparently 

    //we prob want to create a distinc id for this so that we can get/delete/update one post

    res.send("boilerplate stuff here for now");
});

//to grab a specific page
app.get("/api/posts/:id", (req, res) => {
    //this is where we want to call the datas to go the homefeed

    //im guessing the user will press a button and that will go to /feed page and the /feed will call /api/feed for the stuff to show

    res.send("boilerplate stuff here for now");
});

//to update
app.patch("/api/posts/:id", (req, res) => {
    res.send("boilerplate");
}); 

app.delete("/api/posts/:id", (req, res) => {
    res.send("boilerplate");
});

//run server
app.listen(PORT, () => {
    console.log("the server is alive");
});