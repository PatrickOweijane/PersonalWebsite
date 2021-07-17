export default class Paddle {

    constructor (canvas) {
        this.position = {
            x: 0.5,
            y: 0.5,
        };
        this.geometry = {
            x: 0.2,
            y: 0.05,
        };
    }

    draw (visuals) {
        visuals.ctx.fillRect(
            this.position.x * visuals.canvas.width,
            this.position.y * visuals.canvas.height,
            this.geometry.x * visuals.canvas.width,
            this.geometry.y * visuals.canvas.height,
        );
    }

    update (newCoordinates) {
        this.position = newCoordinates;
    }
}
