var material_img = []; 
var location_img = []; 
var light_img = []; 
var inhabitant_img = []; 
var house;

var index1 = 1; 
var index2 = 1; 
var index3 = 1; 
var index4 = 1; 

var a = [
  "bricks",
  "broken dishes",
  "discared clothing",
  "dust",
  "wood",
  "weeds",
  "steel",
  "sand",
  "plastic",
  "paper",
  "mud",
  ] ;
  
  
var b = [
  "underwater",
  "on an island",
  "on the sea",
  "in heavy jungle undergrowth",
  "in southern France",
  "in Michigan",
  "in dense woods",
  "in a place with both heavy rain and bright sun",
  "in a cold, windy climate",
  "by a river",
  "among small hills",
  "in a deserted church",
  "in a desert",
  "among other houses",
  ] ;
   
var c = [
  "using all available lighting",
  "using electricity",
  "using candles",
  "using natural lighting",
  ] ;
  
var d = [
  "inhabited by all races of men represented wearing predominantly red clothing",
  "inhabited by friends",
  "inhabited by collectors of all types",
  "inhabited by little girls",
  "inhabited by fishermen and families",
  "inhabited by lovers",
  "inhabited by French- and German-speaking people",
  "inhabited by people who enjoy eating together",
  "inhabited by various birds and fish",
  "inhabited by vegetarians",
  "inhabited by people who sleep very little",
  ] ;



function preload() {

  house = loadImage("img/og.png");
  
  for (i = 0; i < material_names.length; i++) { 
    var temp = loadImage("img/material/" + material_names[i]);
    material_img.push(temp); 
  }
  
  for (i = 0; i < location_names.length; i++) { 
    var temp2 = loadImage("img/location/" + location_names[i]);
    location_img.push(temp2); 
  }
  
  for (i = 0; i < light_names.length; i++) { 
    var temp3 = loadImage("img/light/" + light_names[i]);
    light_img.push(temp3); 
  }
  
  for (i = 0; i < inhabitant_names.length; i++) { 
    var temp4 = loadImage("img/inhabitant/" + inhabitant_names[i]);
    inhabitant_img.push(temp4); 
  }

}

function setup() {
  createCanvas(700,700); 

}

function draw() {
  
 background(255);
 
  image(house,100,250,80,80);
  image(material_img[index1],200,250,80,80);
  image(location_img[index2],300,250,80,80);
  image(light_img[index3],400,250,80,80);
  image(inhabitant_img[index4],500,250,80,80);
  
  
  var rgb = 200; 
  
  push(); 
  fill(rgb); 
  text("shuffle", 325, 500)
  
  if (mouseX > 325 && mouseX < 360 && mouseY > 490 && mouseY < 505 ) { 
    rgb = 0; 
    fill(rgb); 
    text("shuffle", 325, 500)
  } 
  pop();
  
  if (mouseX > 100 && mouseX < 180 && mouseY > 250 && mouseY < 330 ) { 
    text("a house of " +  a[index1] + "                                                " + b[index2] + "                                                " + c[index3]  + "                                                " + d[index4],50,50, 240);
  } 
  
  if (mouseX > 200 && mouseX < 280 && mouseY > 250 && mouseY < 330 ) { 
    text(a[index1],50,50);
  } 
  
  if ( mouseX > 300 && mouseX < 380 && mouseY > 250 && mouseY < 330 ){ 
     text(b[index2],50,50);
  } 
  
  if  ( mouseX > 400 && mouseX < 480 && mouseY > 250 && mouseY < 330 ){ 
     text(c[index3],50,50);
  }
  
  if  ( mouseX > 500 && mouseX < 580 && mouseY > 250 && mouseY < 330 ){ 
      text(d[index4],50,50);
  }
}

function mouseClicked() { 
  
  if (mouseX > 200 && mouseX < 280 && mouseY > 250 && mouseY < 330 ) { 
      index1 = floor(random(0,material_img.length-1)); 
  } 
  
  if ( mouseX > 300 && mouseX < 380 && mouseY > 250 && mouseY < 330 ){ 
      index2 = floor(random(0,location_img.length-1)); 
  } 
  
  if  ( mouseX > 400 && mouseX < 480 && mouseY > 250 && mouseY < 330 ){ 
      index3 = floor(random(0,light_img.length-1)); 
  } 
  
  if  ( mouseX > 500 && mouseX < 580 && mouseY > 250 && mouseY < 330 ){ 
      index4 = floor(random(0,inhabitant_img.length-1));  
  }

 if ( mouseX > 325 && mouseX < 360 && mouseY > 490 && mouseY < 505 ) { 
      index1 = floor(random(0,material_img.length-1)); 
      index2 = floor(random(0,location_img.length-1));
      index3 = floor(random(0,light_img.length-1));
      index4 = floor(random(0,inhabitant_img.length-1));
      
 }
 
}



var material_names = [
  "materials-01.png",
  "materials-02.png",
  "materials-03.png",
  "materials-04.png",
  "materials-05.png",
  "materials-06.png",
  "materials-07.png",
  "materials-08.png",
  "materials-09.png",
  "materials-10.png",
  "materials-11.png",
  ] ; 
  
var location_names = [
  "locations-14.png",
  "locations-15.png",
  "locations-16.png",
  "locations-17.png",
  "locations-18.png",
  "locations-19.png",
  "locations-20.png",
  "locations-21.png",
  "locations-22.png",
  "locations-23.png",
  "locations-24.png",
  "locations-25.png",
  "locations-26.png",
  "locations-27.png",
  ] ;
  
var light_names = [
  "lighting-28.png",
  "lighting-29.png",
  "lighting-30.png",
  "lighting-31.png",
  ] ;
  
var inhabitant_names = [
  "inhabitants-32.png",
  "inhabitants-33.png",
  "inhabitants-34.png",
  "inhabitants-35.png",
  "inhabitants-36.png",
  "inhabitants-37.png",
  "inhabitants-38.png",
  "inhabitants-39.png",
  "inhabitants-40.png",
  "inhabitants-41.png",
  "inhabitants-42.png",
  "inhabitants-43.png",
  ] ;
  
  