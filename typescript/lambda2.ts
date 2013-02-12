class Lambda{
    constructor(public fn:Function){}
}
class Thunk{
    constructor(public val:Function){}
}
function lambda(fn:Function):Function{ return new Lambda(fn).fn; }
function thunk(val:Function):Function{ return new Thunk(val).val; }

class Player{
    constructor(
        public charaid:number,
        public level:number,
        public hp:number,
        public name:string
    ){}
}

var player:Function =
                lambda((
                    charaid:number,
                    level:number,
                    hp:number,
                    name:string
                    )=>thunk(()=>new Player(charaid,level,hp,name))
                );

// クラス
console.log(player(1,10,120,"hoge")());

// 関数
console.log(lambda((x)=>lambda((y)=>x * y))(5)(2));

