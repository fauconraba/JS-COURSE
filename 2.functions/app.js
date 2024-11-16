

let result;
let move;
let statu;



function computerMove(){

  result=Math.random();
  console.log(result);
//computer move

if ( result >=0 && result <= 1/3)
{
  //rock
  move = 'Rock';
}
else if (result > 1/3 && result <= 2/3) {
  move = 'Paper';
}
else{
  move = 'Scissor';
}

}
function rock() {
  computerMove();

  if ( move === 'Rock')
  {
   statu = 'Tie';
    
  }
  else if ( move === 'Paper')
  {
    statu ='loser!';
  }
  else {
    statu = 'winner';
  }
  alert( `you picked rock. Computer picked ${move} . you are ${statu}`);

}

function paper()
{ 
  computerMove();

  if ( move === 'Paper')
  {
   statu = 'Tie';
    
  }
  else if ( move === 'Scissor')
  {
    statu ='loser!';
  }
  else {
    statu = 'winner';
  }
  alert( `you picked paper. Computer picked ${move} . you are ${statu}`);

}
 
function scissors()
{ 
  computerMove();

  if ( move === 'Scissor')
  {
   statu = 'Tie';
    
  }
  else if ( move === 'Rock')
  {
    statu ='loser!';
  }
  else {
    statu = 'winner';
  }
  alert( `you picked Scissor . Computer picked ${move} . you are ${statu}`);

}