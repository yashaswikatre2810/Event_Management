// Create a new game
app.post('/games', async (req, res) => {
    const { game_name, points } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO games (game_name, points) VALUES ($1, $2) RETURNING *',
            [game_name, points]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all games
app.get('/games', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM games');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Submit game result
app.post('/game-result', async (req, res) => {
    const { team_id, game_id, result, points_awarded } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO team_games (team_id, game_id, result, points_awarded) VALUES ($1, $2, $3, $4) RETURNING *',
            [team_id, game_id, result, points_awarded]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
