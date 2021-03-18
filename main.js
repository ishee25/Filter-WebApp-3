noseX=0;
noseY=0;

function preload() {
  moustache = loadImage('https://i.postimg.cc/vTWgkRgW/moustache-filter-pic.png');
}

function setup() {
  canvas = createCanvas(1000, 700);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(1000, 700);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 1000, 700);
  image(moustache, noseX, noseY, 80, 35);
}

function take_snapshot(){    
  save('myFilterImage.png');
}