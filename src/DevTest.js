module.exports= (new function(){
    this.Listeners= require('./plugins/listenerarray');
    this.Listeners.addListener('Status<Server>==START', (self)=>{ console.log("The server is now on.  "); });
    this.Listeners.addListener('Status<Server>==STOP', (self)=>{ console.log("The server is now stopping.  "); });
});