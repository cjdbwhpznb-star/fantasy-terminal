const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
app.use(cors({ origin: '*' }));

const URL = 'https://www.futbolfantasy.com/analytics/laliga-fantasy/mercado';

async function syncLaLigaPlayers() {
  try {
    const { data } = await axios.get(URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const $ = cheerio.load(data);
    const players = [];

    $('.player-row, tr.jugador').each((i, el) => {
      if (players.length >= 250) return false;

      const name = $(el).find('.nombre, .player-name').text().trim();
      const team = $(el).find('.equipo, .team-name').text().trim();
      const priceStr = $(el).find('.precio, .value').text().trim();
      const pos = $(el).find('.posicion, .pos').text().trim();

      if (name) {
        players.push({
          id: i + 1,
          name,
          team,
          position: pos || 'MC',
          price: parseInt(priceStr.replace(/\D/g, '')) || 0,
          updatedAt: new Date().toISOString()
        });
      }
    });

    console.log(`Extrayendo ${players.length} jugadores actualizados.`);
    return players;
  } catch (error) {
    console.error('Error al sincronizar datos:', error.message);
    return [];
  }
}

app.get('/api/pumps', async (req, res) => {
  const players = await syncLaLigaPlayers();
  res.json(players);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
