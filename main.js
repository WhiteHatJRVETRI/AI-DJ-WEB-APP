var scorerightwrist=0
var scoreleftwrist=0
var leftwristX=0
var rightwristY=0
var rightwristX=0
var leftwristY=0
var song=""

function preload(){
    song=loadSound("music.mp3")
}
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotposes)    
}
    function draw(){
        image(video,0,0,600,500)
        fill("red")
        stroke("red")
        if (scorerightwrist>0.2) {
          circle(rightwristX,rightwristY,20)  
        if (rightwristY>0&&rightwristY<100) {
            document.getElementById("speed").innerHTML="speed=0.5X"
            song.rate(0.5)

        }
        if (rightwristY>100&&rightwristY<200) {
            document.getElementById("speed").innerHTML="speed=1X"
            song.rate(1)
            
        }
        if (rightwristY>200&&rightwristY<300) {
            document.getElementById("speed").innerHTML="speed=1.5X"
            song.rate(1.5)
            
        }
        if (rightwristY>300&&rightwristY<400) {
            document.getElementById("speed").innerHTML="speed=2X"
            song.rate(2)
            
        }
        if (rightwristY>400&&rightwristY<500) {
            document.getElementById("speed").innerHTML="speed=2.5X"
            song.rate(2.5)
            
        }
        if (rightwristY>500&&rightwristY<600) {
            document.getElementById("speed").innerHTML="speed=3X"
            song.rate(3)
            
        }


        }
        if (scoreleftwrist>0.2) {
            circle(leftwristX,leftwristY,20)  
          number1=Number(leftwristY)
          number2=floor(number1*2)
          number3=number2*1000
          document.getElementById("volume").innerHTML="volume="+number3
          song.setVolume(number3)
        }
    }
    function modelloaded(){
        console.log("modelloaded")
    }
    function gotposes(results){
if (results.length>0) {
    scorerightwrist=results[0].pose.keypoints[10].score
    scoreleftwrist=results[0].pose.keypoints[9].score
    console.log("scorerightwrist="+scorerightwrist)
    console.log("scoreleftwrist="+scoreleftwrist)
    rightwristX=results[0].pose.rightWrist.x
    rightwristY=results[0].pose.rightWrist.y
    leftwristX=results[0].pose.leftWrist.x
    leftwristY=results[0].pose.leftWrist.y
    }}
    function play(){
        song.play()
        song.setVolume(1)
        song.rate(1)
    }