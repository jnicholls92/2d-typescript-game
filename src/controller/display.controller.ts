export default class DisplayController
{

    private handler: HTMLCanvasElement;
    private options: DisplayControllerOptions | undefined;
    private graphics: CanvasRenderingContext2D;


    constructor(options?: DisplayControllerOptions)
    {

        this.options = {
            'fullscreen': ( options?.fullscreen ? options?.fullscreen : false),
            'width': ( options?.width ? options?.width : 1280 ),
            'height': ( options?.height ? options?.height : 720)
        }; 

        this.handler = document.createElement('canvas') as HTMLCanvasElement;

        if(this.options.fullscreen == true)
        {
            this.register_listeners();
        }

        this.handler.width = this.options.width as number;
        this.handler.height = this.options.height as number;

        document.body.appendChild(this.handler);
        //@ts-ignore
        document.body.style.margin = '0px';
        document.body.style.overflow = 'hidden';

        this.graphics = this.handler.getContext('2d') as CanvasRenderingContext2D;
    }


    private register_listeners(): void
    {
        let obj: DisplayController = this;
        //@ts-ignore
        this.options.width = window.innerWidth as number;
        //@ts-ignore
        this.options.height = window.innerHeight as number;

        window.addEventListener('resize', ()=>{
            //@ts-ignore
            obj.options?.width = window.innerWidth as number;
            //@ts-ignore
            obj.options?.height = window.innerHeight as number;

            obj.handler.width = window.innerWidth;
            obj.handler.height = window.innerHeight;
        });
    }


    public getGraphics(): CanvasRenderingContext2D
    {
        return this.graphics;
    }

    public getOptions(): DisplayControllerOptions
    {
        return this.options as DisplayControllerOptions;
    }

    public getDisplay(): HTMLCanvasElement
    {
        return this.handler;
    }
}

interface DisplayControllerOptions {
    fullscreen?: boolean,
    width?: number,
    height?: number
}