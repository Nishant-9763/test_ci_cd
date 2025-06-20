const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD!');
});
app.get('/ok', (req, res) => {
  res.send('Hello from OK!');
});
app.get('/nishant', (req, res) => {
  res.send('Hello from Nishant!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
