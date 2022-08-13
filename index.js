//getting random images for image1
var ran1=Math.floor(Math.random()*6)+1;

var randomImage1="images/"+"dice"+ran1+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);

//getting random images for image2

var ran2=Math.floor(Math.random()*6)+1;
var randomImage2="images/"+"dice"+ran2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

if(ran1>ran2)
{
    
    document.querySelector("h1").innerHTML="player1 won";
}
else if(ran1<ran2){
    document.querySelector("h1").innerHTML="player 2 won";
}
else{
    document.querySelector("h1").innerHTML="Match Drawn";
}