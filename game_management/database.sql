CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    game_name VARCHAR(100) NOT NULL,
    points INT NOT NULL
);

CREATE TABLE team_games (
    id SERIAL PRIMARY KEY,
    team_id INT REFERENCES teams(id),
    game_id INT REFERENCES games(id),
    result VARCHAR(100),
    points_awarded INT
);
