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

//Able to query any desired parameters
console.log(network.run({
  x:0,z:0
});

console.log(network.error);
