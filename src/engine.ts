class Engine
{

    constructor()
    {
        
    }

}

((w,d)=>{
    let playground: Engine;
    w.addEventListener('DOMContentLoaded', ()=>{
        playground = new Engine();
    });
})(window,document);