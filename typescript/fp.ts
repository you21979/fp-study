class Lambda{
    constructor(public fn:Function){}
}
class Thunk{
    constructor(public val:Function){}
}
export function lambda(fn:Function):Function{ return new Lambda(fn).fn; }
export function thunk(val:Function):Function{ return new Thunk(val).val; }
