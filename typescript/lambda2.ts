import f = module("fp");
class Player{
    constructor(
        public charaid:number,
        public level:number,
        public hp:number,
        public name:string
    ){}
}

var player:Function =
                f.lambda((
                    charaid:number,
                    level:number,
                    hp:number,
                    name:string
                    )=>f.thunk(()=>new Player(charaid,level,hp,name))
                );

// クラス
console.log(player(1,10,120,"hoge")());

// 関数
console.log(f.lambda((x)=>f.lambda((y)=>x * y))(5)(2));

