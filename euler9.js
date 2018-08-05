labela: for (let c = 333; c < 997; c++) {
  for (b = Math.floor((1000 - c) / 2) - 1; b < 1000 - c; b++) {
    // we have limited b because it can't be smaller than a, it also can't be bigger than c
    if ((1000 - b - c) ** 2 == (c - b) * (c + b)) {
      console.log(b * c * (1000 - b - c));
      break labela;
    }
  }
}
/*notice that if a^2 + b^2 = c^2 => a^2 = c^2 -b^2 = (c-b)*(c+b) 
also, if a+b+c = 1000, than a = 1000 -b-c, hence
(1000 - b -c)^2 = (c-b)*(c+b)  */
