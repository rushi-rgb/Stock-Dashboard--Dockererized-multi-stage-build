const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/stocks', (req, res) => {
  res.json([
    { symbol: 'AAPL', price: 210 },
    { symbol: 'TSLA', price: 185 },
    { symbol: 'NVDA', price: 950 }
  ]);
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});