var _Libs= (new function(){
    this.ListenerArray= require('./listenerarray');
});
module.exports= class{
    getPlugin(Plugin){return _Libs.PluginArray._[Plugin]};
    addListener(ListenerType, Listener){_Libs.ListenerArray.addListener(ListenerType, Listener)};
    addListenerPlaceholder(ListenerType, self, kwArgs){
        if(ListenerType in Object.keys(_Libs.ListenerArray._)){_Libs.ListenerArray.runListeners(ListenerType, self, kwArgs);return};
        _Libs.ListenerArray.addListenerType(ListenerType);
        _Libs.ListenerArray.runListeners(ListenerType, self, kwArgs);
    };
};