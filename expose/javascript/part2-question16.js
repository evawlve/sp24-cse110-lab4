for (let key in statistics) {
    let startsWithR = key.charAt(0) === 'r';
    let isOddNumber = statistics[key] % 2 !== 0;
    
    if (startsWithR || isOddNumber) {
      console.log(statistics[key]);
    }
  }