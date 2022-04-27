function preload()
{
    console.log("preload")
}
function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('Posenet is Initialized');
}
function draw()
{
    image(video,0,0,300,300);
}
function take_snapshot()
{
    save('MyFilterImage.png');
}
function gotPoses(results)
{
    console.log('GotPoses');
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;

}
