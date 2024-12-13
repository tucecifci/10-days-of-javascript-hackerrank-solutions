class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
// 1.rectangle sınıfına prototyfe kullanarak area metodu ekle
Rectangle.prototype.area = function(){
    return this.w * this.h;
};

//rectangle classından türeyen Square classı oluştur
class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
}