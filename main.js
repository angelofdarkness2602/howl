nosex = 0;
nosey = 0;

function preload(){
    clownnose = loadImage("https://www.clipartmax.com/png/middle/341-3411305_clip-transparent-stock-clip-glasses-nose-clown-nose-clipart.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosey = results[0].pose.nose.y + 0;
        nosex = results[0].pose.nose.x - 0;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clownnose, nosex, nosey, 50, 50)
}

function take_snapshot(){
    save("my filter image.jpg");
}

