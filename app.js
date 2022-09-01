const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('What iz going on, iz it woking TEST TEST'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

git add app.js
git commit -m "Full pipeline test"
