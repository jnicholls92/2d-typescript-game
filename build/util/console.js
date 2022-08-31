export default class Console {
    /**
     * getTime
     *
     * Use to return current time as a string
     *
     * @returns string
     */
    static getTime() {
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let hs, ms, ss;
        if (h < 10) {
            hs = '0' + h.toString();
        }
        else {
            hs = h.toString();
        }
        if (m < 10) {
            ms = '0' + m.toString();
        }
        else {
            ms = m.toString();
        }
        if (s < 10) {
            ss = '0' + s.toString();
        }
        else {
            ss = s.toString();
        }
        return '[HH:MM:SS]'.replace('HH', hs).replace('MM', ms).replace('SS', ss);
    }
    /**
     * log
     *
     * Used to submit a new console log message.
     *
     * @param classname name of the class
     * @param message string text to display
     * @param level number represents message intensity
     */
    static log(classname, message, level = 0) {
        let c, l;
        switch (level) {
            case 0:
                c = 'color:#90ee90;font-weight:700;';
                l = 'NORMAL';
                break;
            case 1:
                c = 'color:#FCAE18;font-weight:700;';
                l = 'WARN';
                break;
            case 2:
                c = 'color:#DC1C1F;font-weight:700;';
                l = 'FATAL';
                break;
        }
        console.log('%c' + this.getTime() + '[' + l + '][' + classname + '] ' + message, c);
    }
    /**
     * error
     *
     * Used to submit a fatal error message via the console.
     *
     * @param classname
     * @param message
     */
    static error(classname, message) {
        this.log(classname, message, 2);
    }
    /**
     * warn
     *
     * Used to submit a warning message vua the console.
     *
     * @param classname
     * @param message
     */
    static warn(classname, message) {
        this.log(classname, message, 1);
    }
}
