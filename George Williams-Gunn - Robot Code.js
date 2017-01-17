function setup() {
  createCanvas(400,400)
}

function draw() {
 background(200)
 
 //Neck
 stroke(100)
 strokeWeight(3)
 line(100,100,100,300)
 line(110,100,110,300)
 line(120,100,120,300)
 
 //Head
 fill(0)
 noStroke()
 ellipse(110,110,90,90)
 
 //Antena
 stroke(0)
 strokeWeight(1)
 line(140,122,170,125)
 line(120,100,140,20)
 line(80,80,70,70)
 
 //Eyes
 fill(255)
 noStroke()
 ellipse(130,110,20,20)
 fill(0)
 ellipse(130,110,5,5)
 fill(150)
 ellipse(135,95,5,5)
 ellipse(110,106,10,10)
 ellipse(140,122,7,7)
 
 //Body
 fill(100)
 noStroke()
 ellipse(95,310,60,60)
 fill(0)
 rect(55,220,80,100)
 fill(100)
 rect(55,230,80,5)
}