// A game that starts with a given number to to get closest to
// you have 4 crystal to pick from, each crystal has random numbers 
// to pick from and you are trying not to go over on the random numbers

// calling out the variables and selecting a random number to be shown in Number to Get


var yourScore = 0;
var numLosses = 0;
var userTotal = 0;


var compPicker =Math.floor(Math.random()*120+19);





// gernerating random number function to the id Gem1-4
// when click on the Gem, the value will change in html

var Gem1 = Math.floor(Math.random()*12+1);
var Gem2 = Math.floor(Math.random()*12+1);
var Gem3 = Math.floor(Math.random()*12+1);
var Gem4 = Math.floor(Math.random()*12+1);

// declaring variables for wins and loss

$('#numWins').text(yourScore);
$('#numLosses').text(numLosses);

//resets the game
function reset(){
      numRand=Math.floor(Math.random()*120+19);
      console.log(compPicker)
      $('#randomNumber').text(compPicker);
      Gem1 = Math.floor(Math.random()*12+1);
      Gem2 = Math.floor(Math.random()*12+1);
      Gem3 = Math.floor(Math.random()*12+1);
      Gem4 = Math.floor(Math.random()*12+1);
      userTotal = 0; 
      $('#finalTotal').text(userTotal);
    }

    //adds wins to userTotal
    function win(){

      alert("You win!");
      wins++;
      $("#numWins").text(yourScore);
      restartGame();
    }

    // add losses to userTotal
    function lose(){
      alert ("You Lose!");
        losses++;
        $('#numLosses').text(losses);
        restartGame();
    }

    // when clicking each Gem, a number will generate
    // user will click another Gem to get another random number that will be added to the 1st click
    // user will continue to click another Gem to get the target number that was given 

    $('#Gem1').on('click', function(){
      userTotal = userTotal + num1[0];
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
        if (userTotal == compPicker){
          win();
        }
        else if ( userTotal > compPicker){
          lose();
        }
    })

    $('#Gem2').on('click', function(){
      userTotal = userTotal + num1[1];
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
        if (userTotal == compPicker){
          win();
        }
        else if ( userTotal > compPicker){
          lose();
        }
    })

    $('#Gem3').on('click', function(){
      userTotal = userTotal + num1[2];
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);

// win/lose conditions
    if (userTotal == compPicker){
       win();
    }
    else if ( userTotal > compPicker){
      lose();
}
})

$('#Gem4').on('click', function(){
  userTotal = userTotal + num1[1];
  console.log("New userTotal= " + userTotal);
  $('#finalTotal').text(userTotal);
    if (userTotal == randomNumber){
      win();
    }
    else if ( userTotal > compPicker){
      lose();
    }
})