  class Hangman {
  constructor(_canvas) {
    if (!_canvas) {
      throw new Error(`invalid canvas provided`);
    }

    this.canvas = _canvas;
    this.ctx = this.canvas.getContext(`2d`);
  }

  /**
   * This function takes a difficulty string as a parameter
   * would use the Fetch API to get a random word from the Hangman
   * To get an easy word: https://it3049c-hangman.fly.dev?difficulty=easy
   * To get an medium word: https://it3049c-hangman.fly.dev?difficulty=medium
   * To get an hard word: https://it3049c-hangman.fly.dev?difficulty=hard
   * The results is a json object that looks like this:
   *    { word: "book" }
   * */
  getRandomWord(difficulty) {
    return fetch(
      `https://it3049c-hangman.fly.dev?difficulty=${difficulty}`
    )
      .then((r) => r.json())
      .then((r) => r.word);
  }

  /**
   *
   * @param {string} difficulty a difficulty string to be passed to the getRandomWord Function
   * @param {function} next callback function to be called after a word is received from the API.
   */
  start(difficulty, next) {
    // get word and set it to the class's this.word
    this.getRandomWord(difficulty).then((word) => {
    
    // clear canvas
    // draw base
    // reset this.guesses to empty array
    this.clearCanvas();
    this.drawBase();
    this.guessList() = [];
    // reset this.isOver to false
    // reset this.didWin to false
    this.isOver = false;
    this.didWin = false;
    });
  }

  /**
   *
   * @param {string} letter the guessed letter.
   */
  guess(letter) {
    const validInputs = "abcdefghijklmnopqrstuvwxyz";
    const validGuess = "";
    // Check if nothing was provided and throw an error if so
    if(letter == null)
    {
      throw new error("No guess made. Please try again");
    }
    // Check for invalid cases (numbers, symbols, ...) throw an error if it is
    else if(!validInputs.includes(letter))
    {
      throw new error("Letters allowed only. Please try again.")
    }
    // Check if more than one letter was provided. throw an error if it is.
    else if(!letter.length == 1)
    {
      throw new error("Please only guess one letter at a time. Try again.")
    }
    // if it's a letter, convert it to lower case for consistency.
    else if(validInputs.includes(letter))
    {
      validGuess = letter.toLowerCase();
    }
    // check if this.guesses includes the letter. Throw an error if it has been guessed already.
    else if(this.guessList.includes(letter))
    {
      throw new error("Letter has already been guessed. Please try again");
    }
    // add the new letter to the guesses array.
    else if(!this.guessList.includes(letter))
    {
      this.guessList.push(letter);
    }
    // check if the word includes the guessed letter:
    //    if it's is call checkWin()
    //    if it's not call onWrongGuess()
    if (this.word.includes(letter))
    {
      this.checkWin();
    }
    
    else if(!this.word.includes(letter))
    {
      this.onWrongGuess();
    }
  }

  checkWin() {
    // using the word and the guesses array, figure out how many remaining unknowns.
    for (let i = 0; i < this.word.length; i++){
      letter = this.word[i];
    if (!this.guessList.includes(letter))
    {
      return
    }
      this.didWin = true;
      this.isOver = true;
  }
    // if zero, set both didWin, and isOver to true
  }

  /**
   * Based on the number of wrong guesses, this function would determine and call the appropriate drawing function
   * drawHead, drawBody, drawRightArm, drawLeftArm, drawRightLeg, or drawLeftLeg.
   * if the number wrong guesses is 6, then also set isOver to true and didWin to false.
   */
  onWrongGuess() {}

  /**
   * This function will return a string of the word placeholder
   * It will have underscores in the correct number and places of the un-guessed letters.
   * i.e.: if the word is BOOK, and the letter O has been guessed, this would return _ O O _
   */
  getWordHolderText() {
    return;
  }

  /**
   * This function returns a string of all the previous guesses, separated by a comma
   * This would return something that looks like
   * (Guesses: A, B, C)
   * Hint: use the Array.prototype.join method.
   */
  getGuessesText() {
    return ``;
  }

  /**
   * Clears the canvas
   */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Draws the hangman base
   */
  drawBase() {
    this.ctx.fillRect(95, 10, 150, 10); // Top
    this.ctx.fillRect(245, 10, 10, 50); // Noose
    this.ctx.fillRect(95, 10, 10, 400); // Main beam
    this.ctx.fillRect(10, 410, 175, 10); // Base
  }

  drawHead() {}

  drawBody() {}

  drawLeftArm() {}

  drawRightArm() {}

  drawLeftLeg() {}

  drawRightLeg() {}
}
