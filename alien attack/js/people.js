class People {
    constructor(x,y){
        var options = {
            isStatic:true
        
        }
        this.body = Bodies.rectangle(x, y,50, 50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("people.png");
        
        World.add(world, this.body);
        
   

    }
    display(){
        
        imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        image(this.body.position.x,this.body.position.y,this.width,this.height);
      }


    
}