class rope{

    constructor(body1,body2,xOffset){

     
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xOffset,y:0}
           
            }
           
        this.rope1 = Constraint.create(options)
        this.xOffset=xOffset;
        World.add(world,this.rope1);
      }
    display(){
        var A=this.rope1.bodyA.position;
        var B=this.rope1.bodyB.position;
        stroke ("black"); 
        strokeWeight(2);
        line(A.x,A.y,B.x+this.xOffset,B.y);
    

    }
}