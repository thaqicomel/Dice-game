//random number generator
var n=Math.random();
n=n*6;//0-5
n=Math.floor(n)+1;
var changedice="dice"+n+".png";//img src
var imagesource="images/"+changedice;

var image1= document.querySelectorAll("img")[0];// ambik image pastu yang 1st
image1.setAttribute("src",imagesource);//tukar image

var n2=Math.random();
n2=n2*6;//0-5
n2=Math.floor(n2)+1;
var changedice2="dice"+n2+".png";//img src
var imagesource2="images/"+changedice2;

var image2= document.querySelectorAll("img")[1];// ambik image pastu yang 1st
image2.setAttribute("src",imagesource2);//tukar image

if (n > n2) {
  document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(n2 > n){
  document.querySelector("h1").innerHTML="Player 2 Win";
}
else{
  document.querySelector("h1").innerHTML="It is a tie";
}
