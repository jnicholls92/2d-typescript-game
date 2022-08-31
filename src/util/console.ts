export default class Console
{
    /**
     * getTime
     * 
     * Use to return current time as a string
     * 
     * @returns string
     */
    private static getTime(): string
    {
        let d: Date = new Date();
        let h: number = d.getHours();
        let m: number = d.getMinutes();
        let s: number = d.getSeconds();

        let hs: string, ms: string, ss: string;

        if(h < 10){ hs = '0'+h.toString(); }else{ hs = h.toString(); }
        if(m < 10){ ms = '0'+m.toString(); }else{ ms = m.toString(); }
        if(s < 10){ ss = '0'+s.toString(); }else{ ss = s.toString(); }

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
    public static log(classname: string, message: string, level:number = 0): void
    {
        let c: string | undefined, l: string | undefined;
        switch(level)
        {
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
        console.log('%c'+this.getTime()+'['+l+']['+classname+'] '+message, c);
    }

    /**
     * error
     * 
     * Used to submit a fatal error message via the console.
     * 
     * @param classname 
     * @param message 
     */
    public static error(classname: string, message: string): void
    {
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
    public static warn(classname: string, message: string): void
    {
        this.log(classname, message, 1);
    }

}