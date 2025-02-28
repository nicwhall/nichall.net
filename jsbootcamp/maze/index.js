//deconstruct Matter js objects
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const width = window.innerWidth - 10;
const height = window.innerHeight - 30;
const wallwidth = 1;
const gridRows = 10;
const gridCols = 10;
const startRow = Math.floor(Math.random() * gridRows);
const startCol = Math.floor(Math.random() * gridCols);
const unitWidth = width / gridCols;
const unitHeight = height / gridRows;
const unitSize = 10;

//create instance of Matter js objects
const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
    background: "yellow",
  },
});

//create the canvas
Render.run(render);
Runner.run(Runner.create(), engine);

//add a shape - first two arguments are center position
//walls
const walls = [
  //top
  Bodies.rectangle(width / 2, 0, width, wallwidth, {
    isStatic: true,
  }),
  //bottom
  Bodies.rectangle(width / 2, height, width, wallwidth, {
    isStatic: true,
  }),
  //left
  Bodies.rectangle(0, height / 2, wallwidth, innerHeight, {
    isStatic: true,
  }),
  //right
  Bodies.rectangle(width, height / 2, wallwidth, height, {
    isStatic: true,
  }),
];
World.add(world, walls);

//shuffle an array
const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

//grid arrays
// build 2 dimensional arrays using gridrows & gridcols values
const grid = Array(gridRows)
  .fill(null)
  .map(() => Array(gridCols).fill(false));

const verticals = Array(gridRows)
  .fill(null)
  .map(() => Array(gridCols - 1).fill(false));

const horizontals = Array(gridRows - 1)
  .fill(null)
  .map(() => Array(gridRows).fill(false));

const stepThroughCell = (row, col) => {
  //visited cell? return
  if (grid[row][col]) {
    return;
  }
  //mark cell visited
  grid[row][col] = true;

  //Assemble random list of neighbors
  // Above = row -1 col
  // right = row col + 1
  // below = row + 1 col
  // left = row col -1
  const neighbors = shuffle([
    [row - 1, col, "up"],
    [row, col + 1, "right"],
    [row + 1, col, "down"],
    [row, col - 1, "left"],
  ]);

  //for each neighbor
  for (let neighbor of neighbors) {
    //deconstruct neighbor object
    const [nextRow, nextCol, dir] = neighbor;

    // see if neighbor is out of bounds
    if (
      nextRow >= gridRows ||
      nextRow < 0 ||
      nextCol >= gridCols ||
      nextCol < 0
    ) {
      continue;
    }

    //visited neighbor? get next
    if (grid[nextRow][nextCol]) {
      continue;
    } else {
      //remove wall = set array index to true
      if (dir === "left") {
        verticals[row][col - 1] = true;
      } else if (dir === "right") {
        verticals[row][col] = true;
      } else if (dir === "up") {
        horizontals[row - 1][col] = true;
      } else if (dir === "down") {
        horizontals[row][col] = true;
      }
    }
    //visit neighbor - recursive call
    stepThroughCell(nextRow, nextCol);
  }
};

//start at random cell to build maze
stepThroughCell(startRow, startCol);

//draw horizontals
horizontals.forEach((row, rowIndex) => {
  row.forEach((open, colIndex) => {
    // do not draw
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      colIndex * unitWidth + unitWidth / 2,
      rowIndex * unitHeight + unitHeight,
      unitWidth,
      unitSize,
      {
        isStatic: true,
        label: "wall",
        render: {
          fillStyle: "red",
        },
      }
    );

    World.add(world, wall);
  });
});

//draw verticals
verticals.forEach((row, rowIndex) => {
  row.forEach((open, colIndex) => {
    // do not draw
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      colIndex * unitWidth + unitWidth,
      rowIndex * unitHeight + unitHeight / 2,
      unitSize,
      unitHeight,
      {
        label: "wall",
        isStatic: true,
        render: {
          fillStyle: "red",
        },
      }
    );

    World.add(world, wall);
  });
});

const goal = Bodies.rectangle(
  width - unitWidth / 2,
  height - unitHeight / 2,
  unitWidth * 0.7,
  unitHeight * 0.7,
  {
    isStatic: true,
    render: {
      fillStyle: "green",
    },
    label: "goal",
  }
);
World.add(world, goal);

const ballRadius = Math.min(unitWidth, unitHeight);
const ball = Bodies.circle(unitWidth / 2, unitHeight / 2, ballRadius * 0.3, {
  render: {
    fillStyle: "blue",
  },
  label: "ball",
});
World.add(world, ball);

//keydown event listener to move ball
document.addEventListener("keydown", (event) => {
  //get ball velocity (Body object)
  const { x, y } = ball.velocity;
  //w = up
  if (event.keyCode === 38) {
    Body.setVelocity(ball, { x, y: y - 1 });
  }
  //a = left
  if (event.keyCode === 39) {
    Body.setVelocity(ball, { x: x + 1, y });
  }
  //s = down
  if (event.keyCode === 40) {
    Body.setVelocity(ball, { x, y: y + 1 });
  }
  //d = right
  if (event.keyCode === 37) {
    Body.setVelocity(ball, { x: x - 1, y });
  }
});

//Win condition
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      document.querySelector(".winner").classList.remove("hidden");
      world.gravity.y = 1;
      world.bodies.forEach((body) => {
        if (body.label === "wall") {
          if (body.isStatic) {
            Body.setStatic(body, false);
          }
        }
      });
    }
  });
});
