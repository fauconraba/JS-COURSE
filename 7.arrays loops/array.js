//An array is a special variable, which can hold more than one value:
// creation array

const cars =["dacia","volvo" ,"bmw"];
/* syntaxe:
  CONST array_name = [item1,item2,...];
*/
// create array and then providing elements
const cars1 = [];
cars1[0]="renault"; 
cars1[1]="bm"; 
// we can also create with new Array();
const family= new Array("ana","howa","hia");
//changin an array element 
family[0] = "hnaya";

// family [ hnaya , howa , hia]

// !. we can create array inside array

// we can check if the variable is array or not with :

// exemple : the retuen will be 'true' or 'false'
Array.isArray([1,2]);

//how can we know the length of an array ?

// with .lengtgh

family.length; // for example in this ex would return 3

// push() : adds a value to the end of the array

family.push("salam!");

// so now with push my array will be like this :

// family ["hnaya","howa" , "hia" , "salam!"]

// push -> add aval to the end of the array 
// -----------------------------------------
// splice() removes a value from an array 
// splice takes two numbers :
// spilce (index we want to remove , number of values to remove)

family.splice(0,2); // so if we give her 2 will remove two values starting from index 0   
