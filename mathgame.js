  $(document).ready(function () {
    console.log('dom is ready')
// ACTIVATE THE START BUTTON
  $('#start').click(function () {
    restart()
    // $('#answer').text(userinput);
    console.log('restart button clicked.')
  })

// DOCUMENT ENDS
  })

// WITHIN FUNCTION ENTER TO COMPARE THE USERINPUT TO THE ANSWER
  document.addEventListener('keydown', keyEnterHandler, false)
  function keyEnterHandler (e) {
    if (e.keyCode === 13) {
// ANSWER BUTTON
      var answer = $('#answer').val()
      correct(Number(answer))
      console.log('local variable ' + answer)
// return answer
    }
  }

  function correct (answer) {
    console.log("function correct" + answer)
    if (answer === number1 + number2) {
      ++player1score
      console.log ("it is correct!")
      ++quiz.currentQuestion
      updatedisplay ()
      time()
    }
  }

//THIS IS GLOBAL VARIABLE
var player1score = 0
var number1 = 0
var number2 = 0

// QUESTION
    function question(number1, number2, userinput, correctAnswer){
      this.prompt = prompt
      this.choices = answers
      this.correctAnswer = number1 + number2
    }

    var quiz = {
      currentQuestion: 0,
      numberofQuestions: 2,
      isGameOver: false
    }

// JQUERY TO GET DIV. CHANGE VALUE OF DIV TO THE NUMBER

  function generatenumber () {
    return Math.round(Math.random() * 10)
  }



  function endGame () {
    if (quiz.currentQuestion === quiz.numberofQuestions) {
      console.log('game over!')
      //  STOP TIMER
      //  STOP QUIZ
      return true
    }
  }

// QUESTION IS OVER WHEN TIMER = 0
  function questionOver () {
    console.log('questionOver activated')
    ++quiz.currentQuestion
    updatedisplay()
    time()
    endGame()
    correct()
  }

// TIMER
  function time () {
    var timer = 6
    var interval = setInterval(function () {
      timer--
      $('.timer').text(timer)
      if (timer === 0) {
        clearInterval(interval)
// CALL QUESTIONOVER() FUNCTION
        questionOver()
      }
    }, 1000)
  }

  function restart () {
    console.log('restart function activated!')
    updatedisplay()
    time()
    // window.location.reload()
  }

  function updatedisplay () {
    if (quiz.isGameOver === true) {
      $('#results').text('Game Over!')
      console.log('If updated display activated!')
    } else {
  // UPDATE THE 2 NUMBERS
      number1 = generatenumber()
      number2 = generatenumber()
      console.log('hi')
      $('#1stnumber').text(number1)
      $('#2ndnumber').text(number2)

  // UPDATE PLAYERS SCORE
      $('#player1score').text('Total Score: ' + player1score)
      $('#results').text('Please Continue!')
  // UPDATE NEXT QUESION
      $('#currentquestion').text('Current Question ' + quiz.currentQuestion)

      console.log('Else updated display activated!')
    }
  }
