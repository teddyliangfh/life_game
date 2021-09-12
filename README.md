# Cell_Simulator : life game

## background and game instrcution
The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Cell Simulator by creating an initial configuration and observing how it evolves.
## When the next generation is running:
* A Cell with fewer than two live neighbours dies of under-population.
* A Cell with 2 or 3 live neighbours lives on to the next generation.
* A Cell with more than 3 live neighbours dies of overcrowding.
* An empty Cell with exactly 3 live neighbours "comes to life".
* A Cell who "comes to life" outside the board should wrap at the other side of the board.

## How to run the game
* run yarn install to intall the dependencies
* run yarn start to start the game
* after "start", a webpage will open automaticly. If not, the address would be http://localhost:3000/
## How to play the game
* At initial state, you will see an empty board with 10X10 matrix with 100 cells.
* you can make Cells "alive" by clicking it. The alive cell's color is darkblue.
* you can make Cells "dead" by clicking it. the dead cell's color is aliceblue.
* User can trigger "next generation" by clicking next generation button.
* User can trigger a "reset" to the initial state by clicking rest button.

## ToDo
* add function that allow users to select the size of matrix.
* add more tests 



