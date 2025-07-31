const express = require('express');
const app = express();
app.use(express.json());

let latestData = '';

app.post('/data', (req, res) => {
  latestData = req.body.text || '';
  console.log('Received:', latestData);
  res.sendStatus(200);
});

app.get('/data', (req, res) => {
  res.json({ text: latestData });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
