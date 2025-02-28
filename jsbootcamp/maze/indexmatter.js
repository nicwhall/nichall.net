//deconstruct Matter objects
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
  Matter;

const width = 800;
const height = 600;

//create instance of objects
const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});

//create the canvas
Render.run(render);
Runner.run(Runner.create(), engine);

//add MouseConstraint
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

//add a shape - first two arguments are center position

//walls
const walls = [
  //top
  Bodies.rectangle(400, 0, 800, 40, {
    isStatic: true,
  }),
  //bottom
  Bodies.rectangle(400, 600, 800, 40, {
    isStatic: true,
  }),
  //left
  Bodies.rectangle(0, 300, 40, 600, {
    isStatic: true,
  }),
  //right
  Bodies.rectangle(800, 300, 40, 600, {
    isStatic: true,
  }),
];
World.add(world, walls);

//random shapes
for (let i = 0; i < 30; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
    );
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 35, {
        render: {
          fillStyle: "red",
        },
      })
    );
  }
}
