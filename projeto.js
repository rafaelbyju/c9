var a = 0;

function draw() {
  background(World.mouseX/400 * 255,World.mouseY/400 * 255,a);
  
  if (keyDown("UP_ARROW")){
    a = a + 5;
  }
  
  if (keyDown("DOWN_ARROW")){
    a = a - 5;
  }
  
  if (a > 255) {
    a = 255;
  }
  
  if (a < 0) {
    a = 0;
  }
  
  text(floor(World.mouseX/400 * 255),200,180);
  text(floor(World.mouseY/400 * 255),200,200);
  text(a,200,220);
  text("use as setas de cima e baixo para mudar o terceiro valor",50,50);
}
