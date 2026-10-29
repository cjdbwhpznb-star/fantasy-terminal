const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

app.get('/api/pumps', (req, res) => {
  res.json([
    { name: "Lamine Yamal", team: "Barça", price: "22.4M€", trend: "+320k€", status: "Chollo" },
    { name: "Ayoze Pérez", team: "Villarreal", price: "11.2M€", trend: "+180k€", status: "Subiendo" },
    { name: "Mbappé", team: "Real Madrid", price: "24.1M€", trend: "+250k€", status: "Top" }
  ]);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
