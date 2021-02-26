var r

function setup() {
	createCanvas(windowWidth, windowHeight);

	background("green");

	alert("hello");

	
}

function draw() {

	
	r = random;

	noStroke();
	fill(r(0,255),r(0,255),r(0,255));
	ellipse(mouseX,mouseY,100,100);

	

	

}