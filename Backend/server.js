// Create a new task
app.post('/tasks', async (req, res) => {
    const { task_name, points } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (task_name, points) VALUES ($1, $2) RETURNING *',
            [task_name, points]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Complete a task
app.post('/complete-task', async (req, res) => {
    const { team_id, task_id, completion_time, points_awarded } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO team_tasks (team_id, task_id, completion_time, points_awarded) VALUES ($1, $2, $3, $4) RETURNING *',
            [team_id, task_id, completion_time, points_awarded]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
