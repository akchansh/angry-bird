class Slingshot {
    constructor (A,B){
        var options = {
            'bodyA' : A,
            'pointB' : B,
            'stiffness' : 0.5,
            'length' : 20
        }
        this.chain = Constraint.create(options)
        World.add(world,this.chain)
       // this.pointB = B
        console.log(this.chain.bodyA.position)
    }
    display(){
      if (this.chain.bodyA){
        var p1 = this.chain.bodyA.position
        var p2 = this.chain.pointB
        strokeWeight(4)
        line(p1.x,p1.y,p2.x,p2.y)
      }
    }
    fly(){
        this.chain.bodyA = null
    }
}