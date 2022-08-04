for(var i =0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

});}
for(var i =0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("keydown",function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
    });}
function makeSound(ch){
switch(ch){
case "w": tom1();break;
case "a": tom2();break;
case "s": tom3();break;
case "d": tom4();break;
case "j": snare();break;
case "k": crash();break;    
case "l": kick();break;
default:console.log(ch);
}
}
function tom1(){
var audio=new Audio("sounds/tom-1.mp3");
audio.play();}
function tom2(){
var audio=new Audio("sounds/tom-2.mp3");
audio.play();}
function tom3(){
var audio=new Audio("sounds/tom-3.mp3");
audio.play();}
function tom4(){
var audio=new Audio("sounds/tom-4.mp3");
audio.play();}
function snare(){
var audio=new Audio("sounds/snare.mp3");
audio.play();}
 function crash(){
 var audio=new Audio("sounds/crash.mp3");
 audio.play();}
function kick(){
var audio=new Audio("sounds/kick-bass.mp3");
audio.play();}
function buttonAnimation(ckey){
var akey=document.querySelector("."+ckey);
akey.classList.add("pressed");
setTimeout(function(){akey.classList.remove("pressed");},100); 
}