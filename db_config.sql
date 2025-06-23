CREATE DATABASE flip_card_db;
USE flip_card_db;
CREATE TABLE game_scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    attempts INT,
    time_taken INT,
    play_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);