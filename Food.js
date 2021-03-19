class Food {


constructor (){
var foodStock;
this.image= loadImage("sprites/Milk.png");


}

getFoodStock ( ){




}

updateFoodStock ( ){




}

deductFood ( ){



    
}
display ( ){
var x= 80, y=100;

imageMode (CENTER);
image(this.image, x,y,50,50);

if (this.foodstock!=0) {

for (var i=0<this.foodStock;i++;){

if(i%10==0){

x=80;
y=y+50;




}
image(this.image,x,y,50,50);
x=x+30;

}


}





}
}