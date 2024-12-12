class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    perimeter(){
        return this.sides.reduce((total,side) => total + side,0);
    }
}