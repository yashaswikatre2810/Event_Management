const { broadcastLeaderboardUpdate } = require('./wsServer');

// Inside your task and game result endpoints, after successful insert:
await pool.query(
    'INSERT INTO team_tasks (team_id, task_id, completion_time, points_awarded) VALUES ($1, $2, $3, $4) RETURNING *',
    [team_id, task_id, completion_time, points_awarded]
);
broadcastLeaderboardUpdate();
