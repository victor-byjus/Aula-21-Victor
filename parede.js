class Parede {
    constructor(x,y,l,a){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(x,y,l,a,config);
        this.largura = l;
        this.altura = a;
        World.add(world,this.corpo);
    }
    mostrar(){
        var pos = this.corpo.position;
        push();
        rectMode(CENTER);
        stroke("black");
        fill("white");
        rect(pos.x,pos.y,this.largura,this.altura);
        pop();
    }
}