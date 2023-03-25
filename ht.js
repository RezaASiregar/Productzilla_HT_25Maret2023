//jika hasil yang perlu didapat dari penjumlahan 2 angka dari array tersebut adalah 17, berapa pasangan penjumlahan dan outputkan penjumlahannya!
console.log('============================');
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] === 17) {
      console.log(`${[i]} + ${[j]} = ${arr[i] + arr[j]}`);
    }
  }
}

//ada 2 string "hello" dan "world", outputkan huruf yang sama dalam 2 string tersebut
console.log('\n============================');
let kata1 = 'hello'
let kata2 = 'world'

for (let i = 0; i < kata1.length; i++) {
  for (let j = 0; j < kata2.length; j++) {
    if (kata1[i] === kata2[j]) {
      console.log(kata1[i]);
    }
  }
}

