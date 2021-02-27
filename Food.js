class Food{
  constructor(){
    this.foodStock=0;
    this.lastFed;  
  }  
  updateFoodStock(foodStock){
    this.foodStock=foodStock;  
  }
  getFedTime(lastFed){
    this.lastFed=lastFed; 
  }
  deductFood(){
   if(this.foodStock>0){
     this.foodStock=this.foodStock-1;  
   }
      
  }
  getFoodStock(){
   return this.foodStock;   
  } 
  display(){
      
  }
}