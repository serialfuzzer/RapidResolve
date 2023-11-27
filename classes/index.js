const Executor = require("./executor");

class RapidResolve {

  constructor(concurrency, delay, rateLimit){
    this.concurrency = Number( concurrency  || 1);
    this.delay = Number(delay);
    this.rateLimit = Number(rateLimit || 60);
  }
  
  make(fn, argumentArray) {
    return new Executor(fn, argumentArray, this.concurrency, this.delay, this.rateLimit);
  }
  
}

module.exports = RapidResolve;