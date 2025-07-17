// Mask all characters of a credit card except the last 4 ("1234567812345678" →
// "************5678").

function maskCard(cardNumber) {
  let lastFour = cardNumber.slice(-4);
  let stars = '*'.repeat(cardNumber.length - 4);
  return stars + lastFour;
}

maskCard('1234567812345678'); // "************5678"
