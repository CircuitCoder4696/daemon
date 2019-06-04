var Log= require('Logger') ('/srv/daemon/src/plugins/listarrays.js');
module.exports= (new function(){
    this._= {};
    this.addListenerType= ((ListenerType)=>{
        if(ListenerType in Object.keys(this._)){ Log.Warn(`The listener type '${ListenerType}' is already registered in another module.  `); };
        this._[ListenerType]= [];
    });
    this.runListeners= ((ListenerType, self)=>{
        var i,
            j= this._[ListenerType].length;
        for(i= 0; i < j; i++){
            this._[ListenerType][i](self);
        };
    });
    this.addListener= ((ListenerType, Listener)=>{
        this._[ListenerType].push(Listener);
    });
});