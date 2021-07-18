import Visuals from './visuals.js';
import PongSocket from './network.js';

// Global scope
const visuals = new Visuals();
const pongSocket = new PongSocket();

// Event listeners
window.addEventListener('resize', function () {
    visuals.resize();
});

//
function gameLoop() {
    const newCoordinates = {
        paddle: {
            x: 0.1,
            y: 0.1,
        },
    };
    visuals.draw();
    visuals.update(newCoordinates);
    pongSocket.send('right');
    // const imaginaryCoordinates = [0.5, 0.5];
    // const canvasCoordinates = Coordinates.toCanvasCoordinates(visuals.canvas, imaginaryCoordinates);
    // console.log(canvasCoordinates)
    // ctx.clearRect(0, 0, game.game_width, game.game_height);
    // game.update(dt);
    // game.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
