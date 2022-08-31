"use strict";
class Engine {
    constructor() {
    }
}
((w, d) => {
    let playground;
    w.addEventListener('DOMContentLoaded', () => {
        playground = new Engine();
    });
})(window, document);
