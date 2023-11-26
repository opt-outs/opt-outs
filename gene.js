class GenerativeModel {
  constructor() {
    this.weights = [];
  }

  addWeight(weight) {
    this.weights.push(weight);
  }

  alterSelf() {
    // Randomly mutate one of the weights.
    var index = Math.floor(Math.random() * this.weights.length);
    var weight = this.weights[index];
    weight += Math.random() * 0.1;
    this.weights[index] = weight;
  }

  generate() {
    // Generate a new output based on the current weights.
    var output = 0;
    for (var i = 0; i < this.weights.length; i++) {
      output += this.weights[i] * Math.random();
    }
    return output;
  }
}
