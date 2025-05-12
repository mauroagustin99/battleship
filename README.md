# 🛳️ Battleship Game

This is a web-based implementation of the classic Battleship game, where a human player battles against a computer opponent. The game allows manual ship placement as well as random automatic placement, and features turn-based gameplay with basic visual feedback.

## 🎮 Features

- Manual and random ship placement
- Ship selection and orientation toggle
- Turn-based gameplay against computer
- Detection of hits, misses, and sunk ships
- Game-over detection and restart
- Dynamic DOM rendering
- Jest tests for core game logic.

## 🛠️ Technologies Used

- **JavaScript (ES6 Modules)** – for all game logic and UI interaction
- **HTML & CSS** – for layout and styling
- **Jest** – for unit testing player, ship, and board logic
- **Webpack** – for bundling modules and assets

## 📱 Upcoming Features

- **Mobile Version** – Improve CSS responsiveness to support smaller screens
- **Computer skills** - Add better computer gameplay logic

## 🐞 Known Issue

When a ship is manually selected and the "Random place ships!" button is clicked afterward, the previously selected ship remains active, allowing the user to place more ships than allowed. 
