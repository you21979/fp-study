import f = module("fp");
import Player = module("player");

export var player1:Function =
                f.lambda((charaid:number)=>
                    f.lambda((level:number)=>
                        f.lambda((hp:number)=>
                            f.lambda((name:string)=>
                                f.thunk(()=>new Player.Class(charaid,level,hp,hp,name))
                            )
                        )
                    )
                );
export var player2:Function =
                f.lambda((
                    charaid:number,
                    level:number,
                    hp:number,
                    name:string
                    )=>f.thunk(()=>new Player.Class(charaid,level,hp,hp,name))
                );
var ConnectionNotify = {
    level: (p:any):void=>{
        console.log("levelup");
    },
    maxhp: (p:any):void=>{
        console.log(p.self.conn);
        console.log("updatemaxhp");
    },
    hp: (p:any):void=>{
        console.log("updatehp");
    },
    name: (p:any):void=>{
        console.log("updatename");
    }
};
for(var k in ConnectionNotify){
    Player.notify().on(k, ConnectionNotify[k]);
}
// クラス
console.log(player1(1)(10)(120)("hoge")().setLevel(11).setHp(10000));
console.log(player2(2,10,120,"hoge")().setHp(-1));

// 関数
console.log(f.lambda((x)=>f.lambda((y)=>x * y))(5)(2));

console.log(Player.notify());

