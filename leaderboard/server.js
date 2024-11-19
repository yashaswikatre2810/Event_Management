// Get leaderboard
app.get('/leaderboard', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT 
                teams.id,
                teams.team_name,
                COALESCE(SUM(team_tasks.points_awarded), 0) + COALESCE(SUM(team_games.points_awarded), 0) AS total_points
            FROM 
                teams
            LEFT JOIN 
                team_tasks ON teams.id = team_tasks.team_id
            LEFT JOIN 
                team_games ON teams.id = team_games.team_id
            GROUP BY 
                teams.id
            ORDER BY 
                total_points DESC
        `);
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
