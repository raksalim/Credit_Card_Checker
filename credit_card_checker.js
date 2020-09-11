// This project uses Luhn's algorithm to check whether a credit/debit/gift card number is valid. Does not mean it is connected to an account, just that it is a valid card number.
// Provided below is a list of valid, invalid, and to-be-determinded card numbers. 

//----------------------------------------------------------------------------

// Sample Credit card numbers. Provided by Codecademy.

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]; 

// Checker starts here -------------------------------------------------------------------------


// validateCred(array) - use Luhn algorithm to retrun boolian value for card validity */
const validateCred = originalCardNum => {

  // start itterating from the last digit then to the left
  let luhnCardNum = [];
  let luhnCardSum = 0;
  let counter = 0;
  
  //  loop through to creat a new aray with the given card number
  for (let i = (originalCardNum.length - 1) ; i >= 0; i -= 1) {
    //only double every other number from the left
    counter++;
    if (counter % 2 == 0) {
      //if boubled number is double digit, didgets of number is summed
      if (originalCardNum[i] * 2 > 9) {
        luhnCardNum.unshift((originalCardNum[i] * 2) - 9);
      } else {
        luhnCardNum.unshift(originalCardNum[i] * 2);
      }; 
    } else {
      luhnCardNum.unshift(originalCardNum[i]);
    }
  };
  
  // find sumation of luhn card Sum
  for (let i = 0; i < luhnCardNum.length; i ++) {
    luhnCardSum += luhnCardNum[i];
  };
  
  // retrun whether card is VALID or INVALID
  if (luhnCardSum % 10 == 0) {
    return true
  } else {
    return false
  }
};

/* findInvalidCard(nestedArray) - loops through nested array of card numbers to find card validity using validateCred() */
const findInvalidCard = allCards => {
  
  let allValidCards = [];
  let allInvalidCards = [];

  // loop thorugh to find all card's validity
  for (i = 0; i < allCards.length; i ++) {
    let cardValidity = validateCred(allCards[i]);
    
    if (cardValidity == true) {
      allValidCards += allCards[i];
      console.log(`Card # ${i + 1} is VALID. \nCard Number: ${allCards[i].join("")}\n`);
      // if card is invalid idInvalidCardCompanies()
    } else {
      allInvalidCards += allCards[i];
      console.log(`Card # ${i + 1} is NOT VALID / INVALID. \nCard Number: ${allCards[i].join("")}`);
      idInvalidCardCompanies(allCards[i]);
    }
  }
};


/* idInvalidCardCompanies(nestedArray) - loops through nested array of invalid card numbers to find card company that may have issued the faulty card number. If number does not correspond with card company return "Company not found." */
//use switch function with default of "Company not found"
const idInvalidCardCompanies = invalidCard => {
  switch (invalidCard[0]) {
    case 3:
      console.log("The Issuer of the card was Amex (American Express).\n");
      break;
    case 4:
      console.log("The Issuer of the card was Visa.\n");
      break;
    case 5:
      console.log("The Issuer of the card was Master Card.\n");
      break;
    case 6:
      console.log("The Issuer of the card was Discover.\n");
      break;
    default:
      console.log("Company not found.\n")
      break;
  };
};

const user_card_checker = (user_card) => {
  
  var user_card_formated = [[]]
  for(i = 0; i < user_card.length; i ++) {
    user_card_formated[0].push(parseInt(user_card[i]))
    
  };

  console.log(\n\n"User's Card:\n")

  findInvalidCard(user_card_formated);


}


const main = () => {
  // call functions with nested arracy of cardnumbers
  findInvalidCard(batch);


  // user may delete the "//" below and add a card number as a string to check
  
  //user_card_checker("4744283848485772");


}

main();