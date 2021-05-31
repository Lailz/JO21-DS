const greet = () => {
  console.log("Hello!");
  greet();
};

greet();

const gift = ["box", "box", "gift", "box", "gift"];

const openGift = (giftArray) => {
  const maybeGift = giftArray.shift();

  if (maybeGift === "box") {
    openGift(giftArray);
  } else if (maybeGift === "gift") {
    console.log("WOOOOOOWWWW AMAAAAZINNNGG MAAAGIIIIIC");
  } else {
    console.log("Ooops there's no gift!");
  }
};

// openGift(gift);

// 5! => 5 * 4 * 3 * 2 * 1 = 120

// 5! => 5 * 4! = 120
// 4! => 4 * 3!
// 3! => 3 * 2!
// 2! => 2 * 1!
// 1! => 1 * 0!

const factorial = (number) => {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(5));
