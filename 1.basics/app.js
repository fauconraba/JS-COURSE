let quantity = 0;
let message ='Cart quantity :';
let resetMessage = 'Cart was reset.';

function show(){
console.log( message+' ' +quantity);
}
function add(){
  quantity++;
  console.log( message+' ' +quantity);  
}
function addtwo(){
  quantity+=2;
  console.log( message+' ' +quantity);  
}
function addthree(){
  quantity+=3;
  console.log( message+' ' +quantity);  
}
function reset(){
  quantity=0;
  console.log(resetMessage);
  console.log( message+' ' +quantity);  
}

