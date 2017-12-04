function setup() { 
  createCanvas(1000,1000);
d= random(255)
	p= random (255)
	a= random(255)
} 

function mouseWheel() { 
  background(f,g,h);
}

function mouseDragged() {
	strokeWeight (15)
	stroke(d,p,a)
	fill(d,p,a,200)
	ellipse(mouseX,mouseY,10,10)
}

function mousePressed () {
d=random(255)
	p=random(255)
	a=random(255)
	
}

