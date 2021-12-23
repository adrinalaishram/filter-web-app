lipsx = 0;
lipsy = 0;
function preload(){
lipstick_lips = loadImage("https://i.postimg.cc/Kv0QgJVR/lip-clipart-8.png");
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();

video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on(' pose ', gotposes);
}

function modelLoaded(){
    console.log("posenet is initialized");

}

function gotposes(results){
    if(results.length > 0)
    {
        console.log(results);
        lipsx =   results[0].pose.nose.x;
        lipsy =   results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick_lips, lipsx, lipsy, 30, 30)
    }
    
function take_snapshot(){
    save("adrina.png");
}