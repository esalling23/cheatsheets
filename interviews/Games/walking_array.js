// Write a function that modifies a 2D array grid 
// to simulate a character walking around a board

// base grid
// const gridSize = 10

const GRID_OBJECTS = {
	PLAYER: 'player',
	COLLECTABLE: 'collectable',
	OBSTACLE: 'obstacle'
}

const startingPositions = {
	[GRID_OBJECTS.PLAYER]: [0, 0],
	[GRID_OBJECTS.COLLECTABLE]: [[1, 1], [2, 3], [6, 9]],
	[GRID_OBJECTS.OBSTACLE]: [[1, 3], [5, 4], [7, 7]]
}

const DIRECTIONS = {
	UP: [-1, 0],
	DOWN: [1, 0],
	RIGHT: [0, 1],
	LEFT: [0, -1]
}

// the game
class Game {
	constructor(gridSize, startingPos) {
		this.grid = this.getStartingGrid(gridSize, startingPos);
		this.playerPos = startingPos[GRID_OBJECTS.PLAYER]
		this.alive = true
		this.points = 0;
	}

	// based on startingPositions, returns starting grid
	getStartingGrid = (gridSize, startingPos) => {
		const newGrid = [...new Array(gridSize)
												.fill()
												.map(() => new Array(gridSize).fill().map(() => null))];

		for (const object of Object.keys(startingPos)) {
			const val = startingPos[object]
			// console.log(val, object)
			if (typeof val[0] === 'number') {
				newGrid[val[0]][val[1]] = object
			} else {
				for (const pos of val) {
					newGrid[pos[0]][pos[1]] = object
				}
			}
		}

		return newGrid
	}

	// move the player around
	movePlayer = (input) => {
		if (!this.alive) {
			console.log('Game Over')
			return
		}

		const newPos = [this.playerPos[0] + input[0], this.playerPos[1] + input[1]]
		const gridObj = this.grid[newPos[0]][newPos[1]];

		if (gridObj === GRID_OBJECTS.OBSTACLE) {
			this.alive = false;
			console.log('Hit Obstacle. Game Over.')
		}
		
		if (gridObj === GRID_OBJECTS.COLLECTABLE) {
			this.points++;
			console.log(`Collected @ ${newPos}. Points: ${this.points}`)
		}

		this.grid[newPos[0]][newPos[1]] = GRID_OBJECTS.PLAYER;
		this.playerPos = newPos
	}
}

const game = new Game(10, startingPositions)
console.log(game)

game.movePlayer(DIRECTIONS.RIGHT)
game.movePlayer(DIRECTIONS.DOWN)
game.movePlayer(DIRECTIONS.DOWN)
game.movePlayer(DIRECTIONS.RIGHT)
game.movePlayer(DIRECTIONS.RIGHT)

console.log(game.playerPos, game.points)