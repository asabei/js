function nbYear(p0, percent, aug, p) {
  i = 0; 
  //let human = p0
  while (p0 < p) {
    p0 += (p0 * percent / 100) + aug;
    p0 = Math.floor(p0);
    i++;
    }
  return i;
}
