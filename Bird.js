class Bird extends BaseClass{
    constructor(x, y){
      super(x, y, 50, 50);
      this.image = loadImage("sprites/bird.png");
    }

    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  };

  /*
  INHERITANCE
  Parent - BASE class
  Children - will get all the properties/functions from the parent
          - SUB CLASSES

  super() -- will transfer everything from the constructor of the baseclass
  */
   