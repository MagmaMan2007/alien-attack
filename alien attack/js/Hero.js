class Hero {
    constructor(x,y){
        var options = {
            isStatic:true
        
        }
        this.body = Bodies.rectangle(x, y,50, 50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/hero.png");
        
        World.add(world, this.body);
        
   

    }
    display(){
        
        imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      }


    
}