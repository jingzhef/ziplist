const test = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function zipList(a1, a2) {
  const final = [];
  if (a1.length === a2.length) {
    let i = 0;
    while (i < a1.length) {
      final.push(a1[i], a2[i]);
      i++;
    }
  }
  return final;
}

console.log(zipList(test, test2));

function zipListTheSimpleWay(a1, a2) {
  return _.flatten(_.zip(a1, a2));
}

console.log(zipListTheSimpleWay(test, test2));
