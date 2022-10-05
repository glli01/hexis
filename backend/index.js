import express from 'express';

const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
    res.send('Mock response');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})