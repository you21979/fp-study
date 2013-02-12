/**
 *  プレイヤー
 */
///<reference path='node.d'/>
import node = module("node");

/**
 *  レベルアップ処理
 */
export function levelup(self:Class,n:number,o:number):void{
    self.setMaxHp(n * 200 - o);
}
/**
 *  処理
 */
export function clamp(val:number,max:number,min:number):number{
    return Math.max(min, Math.min(val,max));
}

/**
 *  EventEmitter
 */
export class Emitter extends node.EventEmitter {
    /**
     *  コンストラクタ
     */
    constructor(){
        super();
        this.init();
    }
    /**
     * 初期化
     */
    private init():void{
        // 依存関係処理
        this
            // レベルアップ処理
            .on("level", (p:any):void=>{
                levelup(p.self, p.n, p.o);
            })
        ;
    }
}
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
            this.hp = clamp(n, this.maxhp, 0);
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
var s_notify:Emitter = null; // 通知クラス
