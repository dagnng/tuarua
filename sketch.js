let blocks=[];

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
 
 
//blendMode(SOFT_LIGHT);
  background(210,80,100);
  beginShape();
  for(let i=0; i<800;i+=3){
     for(let j=0; j<800;j+=3){ 
      let c= color(0,100,100);
       let r = random(200,300);
      strokeWeight(0.1);
      stroke(c);
      // fill(30,80,80);
       noFill();
      vertex(random(r,j),random(i,r));
    }
  }
  endShape();
}

function mousePressed() {
saveFrames('out', 'png', 1, 1);
}