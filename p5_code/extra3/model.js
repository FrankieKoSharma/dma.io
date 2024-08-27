class Person {

xax;
yax;
col;
size;
armAngle;

    constructor(x, y, color, size) {
      this.xax = x;
      this.yax = y;
      this.col = color;
      this.size = size;
      this.armAngle = 0;
    }
  
    display() {
      
      push();
      scale(this.size);
      noStroke();
      
      fill(this.col);
      ellipse(this.xax, this.yax, 100, 100);
      // rect(this.xax-45,this.yax+60,90,200,10);
      rect(this.xax-40,this.yax+270,30,160);
      rect(this.xax+10,this.yax+270,30,160);

      fill(this.col);
      rect(this.xax-45,this.yax+60,90,200,10);

      fill(0, 0, 0, 30);
      rect(this.xax-45,this.yax+60,90,200,10);

      fill(0);
      ellipse(this.xax-20,this.yax-10,20,20);
      ellipse(this.xax+20,this.yax-10,20,20);

      this.armAngle = sin(frameCount * 0.1) * 45;

      // push();
      // fill(this.col);
      // rotate(radians(this.armAngle));
      // rect(this.xax+50,this.yax-310,130,30);
      // pop();

      // push();
      // fill(this.col);
      // rotate(radians(-this.armAngle));
      // rect(this.xax-445,this.yax+70,130,30);
      // pop();

      push();
      fill(this.col);
      translate(this.xax - 45, this.yax + 60); // Move to left shoulder
      rotate(radians(this.armAngle+90));
      rect(0, 0, 130, 30);
      pop();
  
      push();
      fill(this.col);
      translate(this.xax + 45, this.yax + 60); // Move to right shoulder
      rotate(radians(-this.armAngle+90));
      rect(0, -30, 130, 30);
      pop();

      push();
      noFill();
      stroke(2);
      strokeWeight(2);
      arc(this.xax+2, this.yax+15, 60, 30, radians(30), radians(175), OPEN);
      // arc(x, y, w, h, start of arc radians, stop of arc radians, mode)
      pop();

      pop();
    }
}