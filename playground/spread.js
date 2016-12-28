var groupA = ['jen', 'cory'];
var groupB = ['Vikram'];
var final = [...groupB, ...groupA];

function greeting(name, age){
  return 'Hi, ' + name + '. Your age is ' + age + '.';
};

var personOne = ['Bill', 34];
var personTwo = ['Henry', 23];

//console.log(greeting(...personTwo));

var names = ['Sussie', 'Mary'];
var final = ['Adam', ...names];

final.forEach(function(name){
  console.log('Hi ' + name + '.');
})
