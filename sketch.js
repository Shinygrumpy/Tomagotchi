var dog, happyDog
var database
var foodS, foodStock
var dogg

function preload()
{

 dog = loadImage("Dog.png");
 happyDog = loadImage("happydog.png");

}

function setup() 
{
	createCanvas(500,500);  

  database = firebase.database();

  dogg = createSprite(250,250,10,10);
  dogg.addImage(dog);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
 
}


function draw() {   


  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogg.addImage(happyDog)
    
  }

  drawSprites();
  
  

}

function readStock(data){
  foodS = data.val();
} 

function writeStock(x){
  if(x <= 0){
   x = 0
  }
  else{
   x = x-1
  }
  database.ref('/').update({
    Food : x
  })
}



