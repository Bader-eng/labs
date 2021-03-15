'use strict';
const names = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass',
];
const imagesection=document.getElementById('imagesSection');
const img1=document.getElementById('img1');
const img2=document.getElementById('img2');
const img3=document.getElementById('img3');

//let pic1=[]
function Pic(name){
  this.name=name;
  this.views=0;
  this.votes=0;
  this.path=`./img/${name}.jpg`;
  Pic.allpic.push(this);
}
Pic.allpic=[];
for(let i=0;i<names.length;i++)
{
  new Pic(names[i]);
}

function render(){
  
}