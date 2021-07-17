import Paddle from './paddle.js'


export default class Visuals {
    
    constructor () {
        const canvas = document.getElementById('gameScreen');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        
        this.ctx = ctx;
        this.canvas = canvas;

        this.paddle = new Paddle(canvas);
        this.objects = [
            this.paddle,
        ]
    }
  
    resize () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        console.log('canvas resized:\n\tHeight: ' + this.canvas.height +'\n\tWidth: '+ this.canvas.width);
    }

    draw () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.objects.forEach(object => object.draw(this));
    }
    update(newCoordinates) {
        this.paddle.update(newCoordinates['paddle']);
    }
}
