const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

// Plantillas actualizadas de LaLiga (Temporada 2026/2027) - Sin equipos descendidos
const laligaPlayers = [
  // FC Barcelona
  { id: 1, name: "Lamine Yamal", team: "FC Barcelona", position: "DEL", value: 190000000 },
  { id: 2, name: "Raphinha", team: "FC Barcelona", position: "DEL", value: 175000000 },
  { id: 3, name: "Fermín López", team: "FC Barcelona", position: "MED", value: 110000000 },
  { id: 4, name: "Pedri", team: "FC Barcelona", position: "MED", value: 95000000 },
  { id: 5, name: "Dani Olmo", team: "FC Barcelona", position: "MED", value: 85000000 },
  { id: 6, name: "Pau Cubarsí", team: "FC Barcelona", position: "DEF", value: 65000000 },
  { id: 7, name: "Jules Koundé", team: "FC Barcelona", position: "DEF", value: 60000000 },
  { id: 8, name: "Marc-André ter Stegen", team: "FC Barcelona", position: "POR", value: 30000000 },

  // Real Madrid
  { id: 9, name: "Kylian Mbappé", team: "Real Madrid", position: "DEL", value: 185000000 },
  { id: 10, name: "Jude Bellingham", team: "Real Madrid", position: "MED", value: 140000000 },
  { id: 11, name: "Vinicius Jr", team: "Real Madrid", position: "DEL", value: 170000000 },
  { id: 12, name: "Arda Güler", team: "Real Madrid", position: "MED", value: 130000000 },
  { id: 13, name: "Federico Valverde", team: "Real Madrid", position: "MED", value: 120000000 },
  { id: 14, name: "Rodrygo Goes", team: "Real Madrid", position: "DEL", value: 90000000 },
  { id: 15, name: "Antonio Rüdiger", team: "Real Madrid", position: "DEF", value: 40000000 },
  { id: 16, name: "Thibaut Courtois", team: "Real Madrid", position: "POR", value: 35000000 },

  // Atlético de Madrid
  { id: 17, name: "Julián Álvarez", team: "Atlético de Madrid", position: "DEL", value: 110000000 },
  { id: 18, name: "Antoine Griezmann", team: "Atlético de Madrid", position: "DEL", value: 85000000 },
  { id: 19, name: "Conor Gallagher", team: "Atlético de Madrid", position: "MED", value: 55000000 },
  { id: 20, name: "Marcos Llorente", team: "Atlético de Madrid", position: "MED", value: 50000000 },
  { id: 21, name: "Robin Le Normand", team: "Atlético de Madrid", position: "DEF", value: 35000000 },
  { id: 22, name: "Jan Oblak", team: "Atlético de Madrid", position: "POR", value: 35000000 },

  // Athletic Club
  { id: 23, name: "Nico Williams", team: "Athletic Club", position: "DEL", value: 80000000 },
  { id: 24, name: "Oihan Sancet", team: "Athletic Club", position: "MED", value: 55000000 },
  { id: 25, name: "Iñaki Williams", team: "Athletic Club", position: "DEL", value: 50000000 },
  { id: 26, name: "Dani Vivian", team: "Athletic Club", position: "DEF", value: 35000000 },
  { id: 27, name: "Unai Simón", team: "Athletic Club", position: "POR", value: 35000000 },

  // Villarreal CF
  { id: 28, name: "Álex Baena", team: "Villarreal CF", position: "MED", value: 100000000 },
  { id: 29, name: "Ayoze Pérez", team: "Villarreal CF", position: "DEL", value: 40000000 },
  { id: 30, name: "Gerard Moreno", team: "Villarreal CF", position: "DEL", value: 25000000 },
  { id: 31, name: "Diego Conde", team: "Villarreal CF", position: "POR", value: 18000000 },

  // Real Sociedad
  { id: 32, name: "Takefusa Kubo", team: "Real Sociedad", position: "DEL", value: 60000000 },
  { id: 33, name: "Martín Zubimendi", team: "Real Sociedad", position: "MED", value: 60000000 },
  { id: 34, name: "Mikel Oyarzabal", team: "Real Sociedad", position: "DEL", value: 45000000 },
  { id: 35, name: "Álex Remiro", team: "Real Sociedad", position: "POR", value: 30000000 },

  // Real Betis
  { id: 36, name: "Isco Alarcón", team: "Real Betis", position: "MED", value: 70000000 },
  { id: 37, name: "Giovani Lo Celso", team: "Real Betis", position: "MED", value: 35000000 },
  { id: 38, name: "Johnny Cardoso", team: "Real Betis", position: "MED", value: 30000000 },
  { id: 39, name: "Rui Silva", team: "Real Betis", position: "POR", value: 10000000 },

  // Valencia CF & Sevilla FC
  { id: 40, name: "Pepelu", team: "Valencia CF", position: "MED", value: 42000000 },
  { id: 41, name: "Giorgi Mamardashvili", team: "Valencia CF", position: "POR", value: 35000000 },
  { id: 42, name: "Dodi Lukebakio", team: "Sevilla FC", position: "DEL", value: 22000000 },
  { id: 43, name: "Loïc Badé", team: "Sevilla FC", position: "DEF", value: 25000000 }
];

app.get('/api/pumps', (req, res) => {
  res.json(laligaPlayers);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Servidor en marcha en puerto ${PORT}`));
