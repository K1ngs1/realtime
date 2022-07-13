nosex = 0;
nosey = 0;
diffrence = 0;
rightwristx = 0;
leftwristx = 0;

function setup(){
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(500, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function gotPoses(results){
  if(results.length > 0){
    console.log(results); 
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("Nose x =" + nosex + " Nose y =" + nosey);
    rightwristx = results[0].pose.rightWrist.x;
    leftwristx = results[0].pose.leftWrist.x;
    diffrence = floor(leftwristx - rightwristx);
    
    console.log(" Left wrist x = " + leftwristx + " Right wrist x = " + rightwristx + " Diffrence = " + diffrence);
  }
}

function modelLoaded(){
  console.log('posenet is initiallized')
}

function draw(){
  background("lightblue");
  
  document.getElementById("square_side").innerHTML = "Width and height of the square will be = " + diffrence + "px";
  fill("red");
  stroke("red");
  square(nosex, nosey, diffrence);
}