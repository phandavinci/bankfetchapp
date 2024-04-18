import express from 'express';
import {spawn} from 'child_process';
import pg from 'pg';
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    //homepage
    res.send('Hello World');
});