class Rocket {
  constructor(dna) {
    // Conditional constructor (capable of handling "no dna"):
    if(dna) {
      // dna provided as argument
      this.dna = dna;
    } else {
      // no argument provided to constructor
      this.dna = new DNA();
    }
    this.pos = createVector(width/2, height);
    this.vel = createVector();
    this.acc = createVector();
    this.completed = false;
    this.crashed = false;
    this.fitness = 0;
    this.timeSet = false;
    this.timeToTarget = lifespan;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  calcFitness() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = map(d, 0, width, width, 0);
    // Try to promote passing the obstacle
    if(this.pos.y < ry - 5) {
      this.fitness *= 2;
    }
    if(this.completed) {
      this.fitness *= 8;
    }
    if(this.crashed) {
      this.fitness /= 10;
    }
    // Reward the rockets for reaching the target sooner
    this.fitness *= (1/(this.timeToTarget / lifespan));
  }

  update() {
    let d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if(d < 10) {
      this.completed = true;
      // Save the time it takes to reach the target
      if(!this.timeSet) {
        this.timeToTarget = count;
        this.timeSet = true;
        console.log(this.timeToTarget);
      }
      this.pos = target.copy();
    }

    if(this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
      this.crashed = true;
    }

    if(this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }
    if(this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }

    this.applyForce(this.dna.genes[count]);
    if(!this.completed && !this.crashed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  }

  show() {
    push();
    noStroke();
    fill(255,150);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0,0,25,5);
    pop();
  }
}