import express, { type Request, type Response } from 'express';

const app = express();
const PORT: number = 6767;

//le listen
app.get('/', (req: Request, res: Response) => {
    res.send('Skibidi Ohio');
});

app.get('/sixseven', (req: Request, res: Response) => {
    res.send('SIX SEVEN SIX SEVEN')
});

//run server
app.listen(PORT, () => {
    console.log("the server is alive");
});