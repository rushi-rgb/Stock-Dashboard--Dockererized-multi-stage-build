 import { useEffect, useState } from 'react';

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch('/api/stocks')
      .then(res => res.json())
      .then(data => setStocks(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Stock Dashboard</h1>
      {stocks.map(stock => (
        <div key={stock.symbol}>
          {stock.symbol}: ${stock.price}
        </div>
      ))}
    </div>
  );
}

export default App;