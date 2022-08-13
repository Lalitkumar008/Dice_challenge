var ran1=Math.floor(Math.random()*6)+1;

var randomImage1="images/"+"dice"+ran1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

var ran2=Math.floor(Math.random()*6)+1;
var randomImage2="Images/"+"dice"+ran2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(ran1>ran2){
    document.querySelector("h1").innerHTML="Player1 wins";

}
else if(ran1<ran2)
{
    document.querySelector("h1").innerHTML="Player2 wins";
}
else{
    document.querySelector("h1").innerHTM="Match Drawn";
}