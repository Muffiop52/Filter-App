nose_x = 0;
nose_y = 0;

function preLoad()
{
  clown_nose = loadImage('https://postimg.cc/bsV5tR30')
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture[VIDEO];
    video.hide();
    video.size(300,300);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    
}

function take_snapshot()
{
    save('Student.png');
}