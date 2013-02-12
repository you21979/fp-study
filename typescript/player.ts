///<reference path='node.d'/>
import node = module("node");
export class Emitter extends node.EventEmitter {
    constructor(){ super(); }
}
var _notify:Emitter = null;
export function Notify():Emitter{
    if(!_notify){
        _notify = new Emitter();
    }
    return _notify;
}
Notify()
    .on("level", (p:any):void=>{
        p.self.setMaxHp(p.n * 200 - p.o);
    })
;

export class Class {
    constructor(
        public charaid:number,
        public level:number,
        public maxhp:number,
        public hp:number,
        public name:string
    ){
    }
    public setLevel(n:number){
        var o:number = this.level;
        if(o !== n){
            this.level = n;
            Notify().emit("level", {self:this, n:n, o:o});
        }
        return this;
    }
    public setName(n:string){
        var o:string = this.name;
        if(o !== n){
            this.name = n;
            Notify().emit("name", {self:this, n:n, o:o});
        }
        return this;
    }
    public setHp(n:number){
        var o:number = this.hp;
        if(o !== n){
            this.hp = n;
            Notify().emit("hp", {self:this, n:n, o:o});
        }
        return this;
    }
    public setMaxHp(n:number){
        var o:number = this.maxhp;
        if(o !== n){
            this.maxhp = n;
            Notify().emit("maxhp", {self:this, n:n, o:o});
        }
        return this;
    }
}
