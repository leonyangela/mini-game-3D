# Mini 3D Ball Game

A small interactive **3D mini game** built with **React** and **Three.js** where players control a ball and navigate through obstacles to reach the finish line as fast as possible.

The game focuses on **simple physics interactions**, keyboard controls, and a minimal gameplay loop.

## Demo
<img width="1470" height="879" alt="Screenshot 2026-03-08 at 1 12 23 PM" src="https://github.com/user-attachments/assets/9c74c38b-931b-430f-ac7d-47d7b76eb7b5" />

## Gameplay

Players control a rolling ball and must reach the finish platform while avoiding obstacles.

- **Move** using `W A S D`
- **Jump** using `Space`
- Navigate around **block obstacles**
- Reach the **finish line**
- Your **time is recorded** from start to finish

Physics makes the ball movement feel dynamic and responsive.

Hidden boundary walls prevent the ball from falling off the level.

## Tech Stack

- **React** – UI and component structure
- **Three.js** – 3D rendering
- **React Three Fiber** – React renderer for Three.js
- **Zustand** – Global state management
- **Physics Engine** – For realistic movement and collisions

## Features

- Real-time **3D ball movement**
- **Keyboard controls** (WASD + Jump)
- **Physics-based interactions**
- **Obstacle course gameplay**
- **Timer system** to measure completion time
- **Boundary walls** to keep the ball inside the map
- Lightweight **state management with Zustand**

## Game Objective

Reach the **finish line as fast as possible**.

The timer starts when the player begins moving and stops once the finish area is reached.


## Controls

| Key | Action |
|----|------|
| W | Move Forward |
| S | Move Backward |
| A | Move Left |
| D | Move Right |
| Space | Jump |


## Clone the repository

```bash
git clone https://github.com/leonyangela/mini-game-3d.git
cd mini-game-3d
npm install
npm run dev
```
