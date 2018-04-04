class Population {
  constructor() {
    this.rockets = [];
    this.popsize = 50;
    this.matingpool = [];

    for(let i=0; i < this.popsize; i++) {
      this.rockets[i] = new Rocket();
    }
  }

  evaluate() {
    let maxfit = 0;
    this.rockets.forEach(rocket => {
      rocket.calcFitness();
      if(rocket.fitness > maxfit) {
        maxfit = rocket.fitness;
      }
    });
    this.rockets.forEach(rocket => {
      rocket.fitness /= maxfit;
    });
    this.matingpool = [];
    this.rockets.forEach(rocket => {
      const n = Math.floor(rocket.fitness * 100);
      // [...Array(n+1).keys()] creates the array [0, 1, ..., n-1]
      [...Array(n).keys()].forEach(() => {
        this.matingpool.push(rocket);
      });
    });
    globalMaxFit = maxfit;
  }

  selection() {
    let newRockets = [];
    for(let i=0; i < this.rockets.length; i++) {
      let parentA = random(this.matingpool).dna;
      let parentB = random(this.matingpool).dna;
      let child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
    generationCount++;
  }

  run() {
    this.rockets.forEach(rocket => {
      rocket.update();
      rocket.show();
    });
  }
}