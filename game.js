
$(document).ready(function(){
  // A game that starts with a given number to to get closest to
  // you have 4 crystal to pick from, each crystal has random numbers 
  // to pick from and you are trying not to go over on the random numbers

  // calling out the variables and selecting a random number to be shown in Number to Get


  var yourScore = 0;
  var numLosses = 0;
  var userTotal = 0;
  var losses = 0;
  wins = 0;


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

  //start the game
  function start(){
        numRand=Math.floor(Math.random()*120+19);
        compPicker =Math.floor(Math.random()*120+19);
        console.log(compPicker)
        $('#randomNumber').text(compPicker);
        Gem1 = Math.floor(Math.random()*12+1);
        Gem2 = Math.floor(Math.random()*12+1);
        Gem3 = Math.floor(Math.random()*12+1);
        Gem4 = Math.floor(Math.random()*12+1);
        userTotal = 0; 
        $('#finalTotal').text(userTotal);
      }
      

      start();

      //adds wins to userTotal
      function win(){

        alert("You win!");
        wins++;
        $("#numWins").text(yourScore);
        start();
      }

      // add losses to userTotal
      function lose(){
        alert ("You Lose!");
          losses++;
          $('#numLosses').text(losses);
          start();
      }

      // when clicking each Gem, a number will generate
      // user will click another Gem to get another random number that will be added to the 1st click
      // user will continue to click another Gem to get the target number that was given 

      $('#Gem1').on('click', function(){
        userTotal = userTotal + Gem1;
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
        userTotal = userTotal + Gem2;
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
        userTotal = userTotal + Gem3;
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
    userTotal = userTotal + Gem4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
      if (userTotal == randomNumber){
        win();
      }
      else if ( userTotal > compPicker){
        lose();
      }
  });

});