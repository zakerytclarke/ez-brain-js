# auto-brain-js
Frontend for Brain.js library that automatically parses data and creates an appropriate, efficient neural network


## Examples
```
var network=require("autoBrainJs");
network.train([
  {x:0,y:0,z:0},
  {x:1,y:0,z:1},
  {x:0,y:1,z:1},
  {x:1,y:1,z:0}
  
]);

console.log(network.run({
  x:0,y:0
});
console.log(network.error);

```
