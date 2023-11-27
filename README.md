# RapidResolve
RapidResolve works its magic on all your promises, seamlessly accelerating their resolution for lightning-fast results. Experience the power of swift execution as RapidResolve takes the lead in optimizing your asynchronous operations, making delays a thing of the past.


# Example

```js
const RapidResolve = require("./index");


async function sayNumber(n){
    let str = `Current number ${n}`;
    return str;
}

let testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


async function run() {
    let CONCURRENCY = 5;
    let DELAY = 3;
    let RATELIMIT = 0;
    let EngineDescription = new RapidResolve(CONCURRENCY,DELAY,RATELIMIT);
    let Engine = EngineDescription.make(sayNumber, testArray);
    let output = await Engine.execute();
    console.log(output)
}


run()

/* Output */
`
[
  'Current number 1',
  'Current number 2',
  'Current number 3',
  'Current number 4',
  'Current number 5',
  'Current number 6',
  'Current number 7',
  'Current number 8',
  'Current number 9',
  'Current number 10',
  'Current number 11',
  'Current number 12',
  'Current number 13',
  'Current number 14',
  'Current number 15'
]
`
```