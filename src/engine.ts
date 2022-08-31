import DisplayController from './controller/display.controller.js';
import Console from './util/console.js';

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

class Engine
{

    private _display: DisplayController;
    private ctx: CanvasRenderingContext2D;

    private fps: number = 30;
    private counter: number = 0;
    private oldTimeStamp: number = 0;
    private index: number = 0;

    constructor()
    {
        Console.log('Engine', 'Console test');
        Console.log('Engine', 'Console test', 1);
        Console.log('Engine', 'Console test', 2);


        this._display = new DisplayController({ fullscreen: true });

        this.ctx = this._display.getGraphics();
        this.start();
    }

    public start(): void
    {
        window.requestAnimationFrame(()=>{
            this.update();
            this.start();    
        });
    }

    private update(): void
    {
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


    private tick()
    {
        
    }

    private render(g: CanvasRenderingContext2D)
    {
        g.fillRect(0, 0, this._display.getDisplay().width, this._display.getDisplay().height);
    }

}

((w,d)=>{
    let playground: Engine;
    w.addEventListener('DOMContentLoaded', ()=>{
        playground = new Engine();
    });
})(window,document);