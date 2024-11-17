// why we use objects ??

/*
 --> objects make our code more organized 
  --> let us group multiple values together
   --> let us use multiple values together
*/


//object creation :
const product = {
  name : 'socks',
  price : 1090
};
// acces

console.log(product.name);
console.log(product[`price`]);

// add new proprety :
product.ref = 1010;
console.log(product)

// delete a proprety

delete product.ref;
console.log(product);

//nested object 

const product2 = {
  name :'gel',
  'delivery-time': '1 day',
  rating: {
    stars : 4 ,
    count : 99
  },
  //a function is another type of value
  //method
  fun: function fnct1(){
    console.log('function inside object !');
  }
};
// acces nested obj

product2.rating.stars = 2 ;
console.log(product2);
console.log(product2.rating.stars);

// acces fuct inside obj
product2.fun();

// json
/*
  javascript object notation
  -> similar to javaScript object

  exemple :
  all propreties use double quotes
  dont support functions

  {
      "name" : "shirt",
      "delivery-time" : "1 day",
      "rating":{ 
      "stars" : 2
      }  
  }
*/

// why we use json syntax instead of js syntaxe ?
// --> js only makes sense in js
// --> json syntaxe more universal

// we use json :
// - when we send data between computers
// - when we store data

/* 
  json obj help us convert :
  js obj --> json
*/

//convert js obj to json
console.log(JSON.stringify(product2));

// json string : JSON.stringify(product2)
//________________________________________
// convert json  to js obj
console.log(JSON.parse(JSON.stringify(product2)));

//  local storage 
// - save values more permanently
// -only support strings
localStorage.setItem('message','hello');