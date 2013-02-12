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
Player.notify()
    .on("level", (p:any):void=>{
        console.log("levelup");
    })
    .on("maxhp", (p:any):void=>{
        console.log("updatemaxhp");
    })
    .on("hp", (p:any):void=>{
        console.log("updatehp");
    })
    .on("name", (p:any):void=>{
        console.log("updatename");
    })
;
// クラス
console.log(player1(1)(10)(120)("hoge")().setLevel(11));
console.log(player2(1,10,120,"hoge")());

// 関数
console.log(f.lambda((x)=>f.lambda((y)=>x * y))(5)(2));

console.log(Player.notify());

