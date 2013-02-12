/**
 *  プレイヤー
 */
///<reference path='node.d'/>
import node = module("node");
/**
 *  EventEmitter
 */
export class Emitter extends node.EventEmitter {
    constructor(){
        super();
        this.init();
    }
    private init():void{
        this 
            .on("level", (p:any):void=>{
                p.self.setMaxHp(p.n * 200 - p.o);
            })
        ;
    }
}
var s_notify:Emitter = null; // 通知クラス
/**
 *  通知用イベントエミッタープロキシ
 */
export function notify():Emitter{
    if(!s_notify){
        s_notify = new Emitter();
    }
    return s_notify;
}
/**
 *  オブジェクト
 */
export class Class {
    constructor(
        public charaid:number,
        public level:number,
        public maxhp:number,
        public hp:number,
        public name:string
    ){}
    public setLevel(n:number){
        var o:number = this.level;
        if(o !== n){
            this.level = n;
            notify().emit("level", {self:this, n:n, o:o});
        }
        return this;
    }
    public setName(n:string){
        var o:string = this.name;
        if(o !== n){
            this.name = n;
            notify().emit("name", {self:this, n:n, o:o});
        }
        return this;
    }
    public setHp(n:number){
        var o:number = this.hp;
        if(o !== n){
            this.hp = n;
            notify().emit("hp", {self:this, n:n, o:o});
        }
        return this;
    }
    public setMaxHp(n:number){
        var o:number = this.maxhp;
        if(o !== n){
            this.maxhp = n;
            notify().emit("maxhp", {self:this, n:n, o:o});
        }
        return this;
    }
}
