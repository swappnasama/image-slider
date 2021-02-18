let myImages=[
  {
    path:'images/canyons.jpg',
    alt:'Canyons'
  },
  {
    path:'images/lake.jpg',
    alt:'Lake Front'
  },
  {
    path:'images/mountains.jpg',
    alt:'Mountains'
  },
  {
    path:'images/snow-mountains.jpg',
    alt:'White Mountains'
  },
  {
    path:'images/beach.jpg',
    alt:'Beach' 
  }
  
];
  

const perPage = 1;      
const totalPages= Math.round(myImages.length/perPage);

//function to determine the index of an oject
function findCurrentIndex(array, attr, value) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
  return -1;
}


const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
//prev click event
prev.addEventListener('click', function(){
  let myCurrentPath=document.querySelector('.random-img').getAttribute("src");
  let currentPageIndex= findCurrentIndex(myImages, 'path', myCurrentPath);
  
  if(currentPageIndex!==0){
    document.querySelector('.random-img').setAttribute('src',myImages[currentPageIndex-1].path); 
    document.querySelector('.random-img').setAttribute('alt',myImages[currentPageIndex-1].alt);
  }
  else{
    document.querySelector('.random-img').setAttribute('src',myImages[currentPageIndex+totalPages-1].path); 
    document.querySelector('.random-img').setAttribute('alt',myImages[currentPageIndex+totalPages-1].alt);
  }

});

//next click event
next.addEventListener('click', function(){
  let myCurrentPath=document.querySelector('.random-img').getAttribute("src");
  let currentPageIndex= findCurrentIndex(myImages, 'path', myCurrentPath);
 
  if(currentPageIndex!== (totalPages-1))
  {
    document.querySelector('.random-img').setAttribute('src',myImages[currentPageIndex+1].path); 
    document.querySelector('.random-img').setAttribute('alt',myImages[currentPageIndex+1].alt);
  }
  else{
    document.querySelector('.random-img').setAttribute('src',myImages[currentPageIndex-totalPages+1].path); 
    document.querySelector('.random-img').setAttribute('alt',myImages[currentPageIndex-totalPages+1].alt);
   }

});


