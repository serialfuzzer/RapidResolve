const Helper = require("../helper/helper")

class Executor {
    constructor(fn, args, concurrency, delay, rateLimit){
        this.fn = fn;
        this.arguments = Helper.chunkArray(args, concurrency);
        this.delay=delay;
        this.rateLimit = rateLimit;
    }

    async execute() {
        let currentTime = new Date();
        let func = this.fn;
        let argsArray = this.arguments;
        let delay = this.delay;
        let resultArray = [];
        for (let i=0;i<argsArray.length;i++){
            let unresolvedPromises = [];
            let argumentBuffer = argsArray[i];
            for(let j=0;j<argumentBuffer.length;j++){
                let curretArgument = argumentBuffer[j];
                unresolvedPromises.push( func(curretArgument) );
            }
            let resolvedPromises = await Promise.all(unresolvedPromises);
            resolvedPromises.map(val=>resultArray.push(val))
            await Helper.delay( delay );
        }
        let timeAfterExecution = new Date();
        let msTaken = timeAfterExecution - currentTime;
        this.timeTaken = msTaken;
        return resultArray;
    }
}

module.exports = Executor;