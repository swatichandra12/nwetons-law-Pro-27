class bob {

    constructor(x, y,color) {
        var options = {
             restitution:1,
              friction:0.3,
              density:0.8,
          }

        this.body = Bodies.circle(x,y,25,options);
         World.add(world, this.body);
       
         this.color=color;
         //this.image=loadImage("paper.png");

      }
      display(){
        var pos =this.body.position;
      
        fill (this.color)
        stroke (this.color); 
        strokeWeight(2);
        ellipse(pos.x,pos.y,50,50);
      }




}