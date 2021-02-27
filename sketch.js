var dog,sadDog,happyDog;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database=firebase.database();
  foodObj=new Food();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);
}

function draw() {
  background(46,139,87);
  foodObj.display();
  fedTime=database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
  //fill("red");
  //textSize(17);
  drawSprites();
}
function readStock(data){
foodS=data.val();
foodObj.updateFoodStock(foodS);
}
function feedDog(){
  dog.addImage(dogImg1);
  if(foodObj.getFoodStock()<=0){
   dog .addImage(happyDog);
   if (foodObj.getFoodStock()<=0){
     foodObj.updateFoodStock(foodObj.getFoodStock()*0);
   }else{
     foodObj.updateFoodStock(foodObj.getFoodStock()-1)
   } 
  }
}
function addFood(){
 foodS++;
 database.ref('/').update({
   Food:foodS
 }) 
}