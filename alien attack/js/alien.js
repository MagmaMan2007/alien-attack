class Alien {
    constructor(x,y){
        var options = {
            isStatic:true
        
        }
        this.body = Bodies.rectangle(x, y,50, 50,options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
        
   

    }
    display(){
        
        rectMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }


    
}