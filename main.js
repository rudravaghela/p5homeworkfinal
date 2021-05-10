function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 200, 150, 230, 120);
    rect(50,50,500,20);
    rect(50,350,500,20);
    rect(550,50,20,300);
    rect(50,50,20,300);
    stroke(0,255,0);
    fill(255,0,0);
    stroke(0,0,255);
    circle(50,50,100);
    circle(550,50,100);
    circle(550,350,100);
    circle(50,350,100);
    fill(0,0,255);
  
    


}
function take_snapshot() {
    save("rudra.png");
}

