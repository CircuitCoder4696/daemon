module.exports= (new function(){
    this._Path= "/srv/daemon-plugins/";
    this._= {};
    var pi= '';
    this.addPlugin= ((Plugin)=>{
        if(Plugin in Object.keys(this._)){ return };
        pi= require(`${this._Path}${Plugin}/rec/Meta.js`);
        this._[Plugin]= require(`${this._Path}${Plugin}/src/${pi.Main.split('.').join('/')}`);
    });
});