CREATE VIEW leaderboard AS
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
    total_points DESC;
