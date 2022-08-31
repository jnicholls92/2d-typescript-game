import DisplayController from './controller/display.controller.js';
import Console from './util/console.js';
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
class Engine {
    constructor() {
        this.fps = 30;
        this.counter = 0;
        this.oldTimeStamp = 0;
        this.index = 0;
        Console.log('Engine', 'Console test');
        Console.log('Engine', 'Console test', 1);
        Console.log('Engine', 'Console test', 2);
        this._display = new DisplayController({ fullscreen: true });
        this.ctx = this._display.getGraphics();
        this.start();
    }
    start() {
        window.requestAnimationFrame(() => {
            this.update();
            this.start();
        });
    }
    update() {
        const timeStamp = performance.now();
        const secondsPassed = (timeStamp - this.oldTimeStamp) / 1000;
        this.oldTimeStamp = timeStamp;
        // Calculate fps
        const fps = Math.round(1 / secondsPassed);
        //@ts-ignore
        const frameSkip = clamp(Math.round((60 - fps) / fps), 0, 30);
        // to allow for animations lasting 1s
        if (this.counter >= this.fps * 2) {
            this.counter = 0;
        }
        this.tick();
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.render(this.ctx);
        this.counter++;
    }
    tick() {
    }
    render(g) {
        g.fillRect(0, 0, this._display.getDisplay().width, this._display.getDisplay().height);
    }
}
((w, d) => {
    let playground;
    w.addEventListener('DOMContentLoaded', () => {
        playground = new Engine();
    });
})(window, document);
