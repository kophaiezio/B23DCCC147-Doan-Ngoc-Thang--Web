const express = require('express');
const app = express();
const port = 3006;


app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

app.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'John Cena'},
        {id: 2, name: 'Roger Rabbit'},
        {id: 3, name: 'Boo Radley'}
    ]);
});
