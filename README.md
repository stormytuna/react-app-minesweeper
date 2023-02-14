# react-app-minesweeper

This is a small Minesweeper clone build with React, hosted with GitHub Pages: https://stormytuna.github.io/react-app-minesweeper/

## How to play this Minesweeper

Choose a game size, default is Medium, Small is recommended for beginners
Left click to reveal a tile, right click to place a flag

## How to play Minesweeper, generally

Minesweeper is a pretty simple game, your job is to reveal every tile without a mine and flag every tile with a mine. Go ahead and switch to a Small game to make it a bit easier. You can see on the top you have 71 cells to reveal and 10 mines to flag. There's also a timer, but you don't need to worry about getting a good time right now. Now, simply click any tile you like. There's a 10 / 81 chance you immediately lose (I couldn't be bothered coding that out :P ), so if you do just reset and try again. Your board should now look something like this 

![image](https://user-images.githubusercontent.com/82264356/218860832-4848500e-e057-491c-9da8-42ad4676f499.png)

Each revealed tile here tells us one thing: how many mines are adjacent to the tile, both orthogonally and diagonally. The tiles with no number have zero mines adjacent to them. Let's go ahead and zoom in on this 2 we have in the top

![image](https://user-images.githubusercontent.com/82264356/218861173-597e52a8-00ec-431c-8eab-73f6bb19f963.png)

So, this tile has 2 mines next to it, but we know that 4 of the tiles aren't mines. Nothing we can do here right now, but if we zoom out a bit...

![image](https://user-images.githubusercontent.com/82264356/218862505-50cccc19-0528-4f3b-81d8-4a6eb2f75895.png)

We can see that these 1 tiles are both adjacent to only 1 unrevealed tile, meaning both those tiles must be bombs. Let's flag them with right click and, oh would you look at that

![image](https://user-images.githubusercontent.com/82264356/218862643-7f8857a8-72d1-4167-90b6-916366cca6ce.png)

We now have the 2 mines next to that 2 tile flagged. This means we can safely reveal those two other unrevealed tiles.

This pattern of revealing, flagging, revealing, flagging, continues until we've finally flagged or revealed every tile, at which point we've won the game!
