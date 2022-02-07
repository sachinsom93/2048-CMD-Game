# 2048-CMD-Game
2048 Game - Node CMD Version

## 2048 Game
2048 is played on a gray 4×4 grid, with numbered tiles that slide when a player moves them
using the four arrow keys. Every turn, a new tile will randomly appear in an empty spot on the
board with a value of either 2 or 4. Tiles slide as far as possible in the chosen direction until they
are stopped by either another tile or the edge of the grid. If two tiles of the same number collide
while moving, they will merge into a tile with the total value of the two tiles that collided. The
resulting tile cannot merge with another tile again in the same move. If a move causes three
consecutive tiles of the same value to slide together, only the two tiles farthest along the
direction of motion will combine. If all four spaces in a row or column are filled with tiles of the
same value, a move parallel to that row/column will combine the first two and last two.

Link to game sample : https://play2048.co/

## Installation Steps

1. Clone the project.
```sh
git clone https://github.com/sachinsom93/2048-CMD-Game.git
```

2. Change the directory.
```sh
cd 2048-CMD-Game
```

3. Install the NPM dependencies
```sh
npm install
```

4. Start the project
```sh
npm start
```

## Game Demo Screenshot
![image](https://user-images.githubusercontent.com/64790109/152797922-0aa15e18-8d13-471b-9320-dba86a9519ce.png)



