export default class DisplayController {
    constructor(options) {
        this.options = {
            'fullscreen': ((options === null || options === void 0 ? void 0 : options.fullscreen) ? options === null || options === void 0 ? void 0 : options.fullscreen : false),
            'width': ((options === null || options === void 0 ? void 0 : options.width) ? options === null || options === void 0 ? void 0 : options.width : 1280),
            'height': ((options === null || options === void 0 ? void 0 : options.height) ? options === null || options === void 0 ? void 0 : options.height : 720)
        };
        this.handler = document.createElement('canvas');
        if (this.options.fullscreen == true) {
            this.register_listeners();
        }
        this.handler.width = this.options.width;
        this.handler.height = this.options.height;
        document.body.appendChild(this.handler);
        //@ts-ignore
        document.body.style.margin = '0px';
        document.body.style.overflow = 'hidden';
        this.graphics = this.handler.getContext('2d');
    }
    register_listeners() {
        let obj = this;
        //@ts-ignore
        this.options.width = window.innerWidth;
        //@ts-ignore
        this.options.height = window.innerHeight;
        window.addEventListener('resize', () => {
            var _a, _b;
            //@ts-ignore
            (_a = obj.options) === null || _a === void 0 ? void 0 : _a.width = window.innerWidth;
            //@ts-ignore
            (_b = obj.options) === null || _b === void 0 ? void 0 : _b.height = window.innerHeight;
            obj.handler.width = window.innerWidth;
            obj.handler.height = window.innerHeight;
        });
    }
    getGraphics() {
        return this.graphics;
    }
    getOptions() {
        return this.options;
    }
    getDisplay() {
        return this.handler;
    }
}
