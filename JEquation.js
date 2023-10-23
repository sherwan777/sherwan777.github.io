class CubicEquation {
  async calculateX3(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.pow(x, 3));
      }, 500); // Simulate async operation with a delay
    });
  }

  async calculate4X2(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(4 * Math.pow(x, 2));
      }, 500); // Simulate async operation with a delay
    });
  }

  async calculate2X(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2 * x);
      }, 500); // Simulate async operation with a delay
    });
  }
}

window.CubicEquation = new CubicEquation();
