CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    team_name VARCHAR(100) NOT NULL,
    members JSONB NOT NULL,
    registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
