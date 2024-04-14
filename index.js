import express from 'express';
import {spawn} from 'child_process';
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    
    res.send('Hello World');
});