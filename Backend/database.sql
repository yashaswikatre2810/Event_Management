CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(100) NOT NULL,
    points INT NOT NULL
);

CREATE TABLE team_tasks (
    id SERIAL PRIMARY KEY,
    team_id INT REFERENCES teams(id),
    task_id INT REFERENCES tasks(id),
    completion_time TIMESTAMP,
    points_awarded INT
);
