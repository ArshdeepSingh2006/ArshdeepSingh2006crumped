class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'restiution':0,
            'friction':1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        
        World.add(world,this.body)
     }

     display(){
      rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, body.position.y, this.width, this.height);
     }
    }
