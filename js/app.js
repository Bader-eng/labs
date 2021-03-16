'use strict';
const names = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
];

/////////////////////////////////////////////////////////

const imagesection=document.getElementById('imagesSection');
const img1=document.getElementById('img1');
const img2=document.getElementById('img2');
const img3=document.getElementById('img3');

///////////////////////////////////////////////////////

function Pic(name){
  this.name=name;
  this.views=0;
  this.votes=0;
  this.path=`./img/${name}`;
  Pic.allpic.push(this);
}
Pic.allpic=[];
for(let i=0;i<names.length;i++)
{
  new Pic(names[i]);
}
//////////////////////////////////////////////////////

function render(){
  let arry1=[];
  ///////////////////////////////////////////////////
  let img1number= randomNumber(0,Pic.allpic.length-1);
  let img2number =randomNumber(0,Pic.allpic.length-1);
  let img3number =randomNumber(0,Pic.allpic.length-1);

  while (img1number===img2number || img1number===img3number || img1number===img3number || arry1[0]===img1number || arry1[1]===img2number ||arry1[2]===img3number
  ) {
    img1number= randomNumber(0,Pic.allpic.length-1);
    img2number =randomNumber(0,Pic.allpic.length-1);
    img3number =randomNumber(0,Pic.allpic.length-1);
  }
  arry1[0]=img1number;
  arry1[1]=img2number;
  arry1[2]=img3number;
  console.log(arry1);
  let img1randoum=Pic.allpic[img1number];
  let img2random=Pic.allpic[img2number];
  let img3random=Pic.allpic[img3number];
  img1.src=img1randoum.path;
  img1.title=img1randoum.name;
  img1.alt=img1randoum.name;
  ////////////////////////////////
  img2.src=img2random.path;
  img2.title=img2random.name;
  img2.alt=img2random.name;
  ////////////////////////////////
  img3.src=img3random.path;
  img3.title=img3random.name;
  img3.alt=img3random.name;
}

let i=0;
imagesection.addEventListener('click',display);
function display(event){
  if (i<25) {
    if (event.target.id === 'img1' || event.target.id === 'img2' || event.target.id === 'img3' ){
      for (let i = 0; i < Pic.allpic.length; i++) {
        if (Pic.allpic.name===event.target.title) {
          Pic.allpic[i].votes++;
          i++;
        }
      }
      render();
    }
  }else{
    //imagesection.removeEventListener('click',display);
    createChart();
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
render();

function createChart(){
  let context = document.getElementById('myChart').getContext('2d');
  let getpicNames=[];
  let getpicVotes=[];

  for(let i=0;i<Pic.allpic.length;i++){
    getpicNames.push(Pic.all[i].name);
  }
  for(let i=0;i<Pic.allpic.length;i++){
    getpicVotes.push(Pic.all[i].votes);
  }
  let chart=new Chart(context,{
    type: 'bar',
    data: {
      labels:getGoatsNames,
      datasets: [{
        label: 'voiting',
        backgroundColor: 'rgb(100, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: getpicVotes
      }
      {
        label: 'Views',
        backgroundColor: 'rgb(100, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: getGoatsVotes
      }
    
    ]
    },
    options:{}
  });
}
