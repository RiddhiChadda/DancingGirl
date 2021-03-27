class Dancer {
    constructor (x , y , width , height ) {
        var options = { 
            'restitution' : 0.5 ,
            'friction' : 0.5 , 
            'density' : 0.5 
        }
this.image1 = loadAnimation("Girl1.png", "Girl2.png" , "Girl3.png" , "Girl4.png" , "Girl5.png" , "Girl6.png" , "Girl7.png")
this.body = Bodies.rectangle(x,y,width,height,options)
this.x = x 
this.y = y 
this.width = width 
this.height = height 
World.add (world , this.body )

    }
display () {
    var angle = this.body.angle 
    push() ; 
    translate(this.body.position.x , this.body.position.y )
    rotate(angle)
    imageMode(CENTER);
    animation(this.image1, 0 , 0 , this.width , this.height );
    pop() ; 
}

// Step1 () {
//     changeImage(this.image2, 0,0 , this.width , this.height )
// }

}