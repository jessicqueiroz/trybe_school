const check = (number, raflleNumber) => number === raflleNumber;


const numberRandon = (number, callback) => {
  const raffleNumber = Math.floor((Math.random() * 5) + 1);
  return (callback(number, raffleNumber) ? 'Parabéns, você ganhou!' : 'Tente novamente');
}

